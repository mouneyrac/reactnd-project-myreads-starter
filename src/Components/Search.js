//@flow
import React, { Component } from "react";
import _ from "lodash";
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

  updateQuery = _.debounce(query => {
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

        // delay empty result as they arrive faster with the BookAPI.
        // Still ugly, I think it works for the API but it would definitely
        // not work for some API.
        const timeout = myquerybooks.length ? 0 : 400;
        setTimeout(() => {
          this.setState({ query: query, querybooks: myquerybooks });
        }, timeout);
      });
    } else {
      // I could not get a nice and fast UX with debounce only, the UX was sugglish.
      // So as I don't have too much time to find the perfect solution,
      // I decided to use an ugly trick.
      // I slow down the execution when it is an empty query.
      setTimeout(() => {
        this.setState({ query: "", querybooks: [] });
      }, 800);
    }
  }, 200); // Keeping the value low as above it feels unresponsive.
  // At the end this is a tricky problem to get perfect solution.
  // I don't think it is the purpose of this project.
  // Things to think about when trying to solve this issue:
  // Test in australia when the BooksAPI take about 500 to 600ms to
  // response. Empty result are much faster.
  // try typing D then ick ultra fast => result should be empty
  // try typing phil, then quickly multiple press Delete
  // => result should be empty
  // on mac/chrome try typing phil, then stay pressed on Delete
  // => result should be empty (notice how the Mac make a pause on
  // the first key deleted)

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
