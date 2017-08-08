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
    this.setState(state => ({
      mybooks: state.mybooks.map(mybook => {
        if (mybook.id === bookid) {
          mybook.shelf = value;
        }
        return mybook;
      })
    }));

    // TODO
    // Make API call to update the DB.
    // Think about the case "None" - is it a Delete?
  };

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
              onUpdateBook={book => {
                this.updateBook(book);
                // history.push("/");
              }}
            />}
        />
      </div>
    );
  }
}

export default BooksApp;
