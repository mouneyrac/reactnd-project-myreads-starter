//@flow
import React, { Component } from "react";
import * as BooksAPI from "./BooksAPI";
import "./App.css";
import { Route } from "react-router-dom";
import Myreads from "./Components/Myreads";
import Search from "./Components/Search";

class BooksApp extends Component {
  state = {
    mybooks: []
  };

  componentDidMount() {
    // Retrieve my books.
    BooksAPI.getAll().then(mybooks => {
      this.setState({ mybooks });
    });
  }

  changeBookShelf = (bookid, value) => {
    /* Reviewer solution:

    Check out this alternative solution:

    handleBookShelfChange = (book, shelf) => {
        if (book.shelf !== shelf) {
          BooksAPI.update(book, shelf).then(() => {
            book.shelf = shelf

            // Filter out the book and append it to the end of the list
            // so it appears at the end of whatever shelf it was added to.
            this.setState(state => ({
              books: state.books.filter(b => b.id !== book.id).concat([book])
            }))
          })
        }
      }

      While I agree that it is much better in term of maintenance I think
      the alternative solution UX is not as good as it is slower:

      1- I prefer optimistic coding, setting the state and in case an error
      occurs during the remote update call then handling the error (probably
      displaying an alert box and reseting the state).
      Is that bad practice?

      2- I did not want to pass the entire book as a props everwhere
      (if I were using Flow I would have to completely define it everywhere
      and I didn't want to do it, even though at the end I didn't use Flow).
      But really only 1- is my concern, the code maintenance advantage of the
      alternative solution made me start refactoring till I discovered the
      performance issue.

  */
    const bookexist = this.state.mybooks.find(book => {
      return book.id === bookid;
    });

    let mybooks;

    if (bookexist) {
      // Move a book to another shelf.
      mybooks = this.state.mybooks.map(mybook => {
        if (mybook.id === bookid) {
          mybook.shelf = value;
          this.updateRemoteBook(mybook);
        }
        return mybook;
      });

      this.setState(state => ({
        mybooks: mybooks
      }));
    } else {
      // Add a new book to one of our shelf.
      BooksAPI.get(bookid).then(book => {
        book.shelf = value;
        this.setState({ mybooks: this.state.mybooks.concat([book]) });
        this.updateRemoteBook(book);
      });
    }
  };

  updateRemoteBook(book) {
    BooksAPI.update(book, book.shelf);
  }

  render() {
    return (
      <div className="app">
        <Route
          exact
          path="/"
          render={() =>
            <Myreads
              mybooks={this.state.mybooks}
              onChangeShelf={(bookid, value) => {
                this.changeBookShelf(bookid, value);
              }}
            />}
        />
        <Route
          path="/search"
          render={({ history }) =>
            <Search
              mybooks={this.state.mybooks}
              onChangeShelf={(bookid, value) => {
                this.changeBookShelf(bookid, value);
              }}
            />}
        />
      </div>
    );
  }
}

export default BooksApp;
