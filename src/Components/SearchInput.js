//@flow
import React, { Component } from "react";
import PropTypes from "prop-types";
import "../App.css";

class SearchInput extends Component {
  static propTypes = {
    onChangeQuery: PropTypes.func.isRequired
  };

  state = {
    query: ""
  };

  render() {
    return (
      <div className="search-books-input-wrapper">
        {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
        <input
          value={this.state.query}
          type="text"
          placeholder="Search by title or author"
          onChange={e => {
            this.props.onChangeQuery(e.target.value);
            this.setState({ query: e.target.value });
          }}
        />
      </div>
    );
  }
}

export default SearchInput;
