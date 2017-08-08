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

  updateBook = book => {
    this.setState(state => ({
      mybooks: state.mybooks.map(
        mybook => (mybook.id === book.id ? book : mybook)
      )
    }));
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
              onUpdateBook={book => {
                this.updateBook(book);
                // history.push("/");
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
