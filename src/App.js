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
