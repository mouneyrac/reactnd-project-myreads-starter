//@flow
import React, { Component } from "react";
import SearchBar from "./SearchBar";
import BookList from "./BookList";
import * as BooksAPI from "../BooksAPI";
import PropTypes from "prop-types";
import "../App.css";

class Search extends Component {
  static propTypes = {
    onChangeShelf: PropTypes.func.isRequired,
    mybooks: PropTypes.array.isRequired
  };

  state = {
    query: "",
    querybooks: []
  };

  updateQuery(query) {
    if (query) {
      BooksAPI.search(query).then(querybooks => {
        // If no array return empty the results.
        // TODO: check if it is really empty and not an error.
        //       But it is not the purpose as we are using BooksAPI.
        if (!Array.isArray(querybooks)) {
          querybooks = [];
        }

        // Check if any of the query books are in mybooks,
        // if yes return the mybook one (so search knows about the shelf).
        const myquerybooks = querybooks.map(querybook => {
          const myquerybook = this.props.mybooks.find(mybook => {
            return mybook.id === querybook.id;
          });
          return myquerybook ? myquerybook : querybook;
        });

        // delay empty result as they arrive faster.
        // still ugly, I think it works for the API but it would definitely
        // not work for some API.
        const timeout = myquerybooks.length ? 0 : 400;
        setTimeout(() => {
          console.log(myquerybooks.length);
          this.setState({ query: query, querybooks: myquerybooks });
        }, timeout);
      });
    } else {
      // I could not get a nice and fast UX with debounce, the UX was sugglish.
      // So as I don't have too much time to find the perfect solution,
      // I decided to use an ugly trick.
      // I slow down the execution when it is an empty query.
      setTimeout(() => {
        this.setState({ query: "", querybooks: [] });
      }, 800);
    }
  }

  render() {
    return (
      <div className="search-books">
        <SearchBar
          onChangeQuery={query => {
            this.updateQuery(query);
          }}
        />

        <div className="search-books-results">
          <BookList
            books={this.state.querybooks}
            onChangeShelf={this.props.onChangeShelf}
          />
        </div>
      </div>
    );
  }
}

export default Search;
