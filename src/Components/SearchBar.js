//@flow
import React, { Component } from "react";
import BackButton from "./BackButton";
import SearchInput from "./SearchInput";
import PropTypes from "prop-types";
import "../App.css";

class SearchBar extends Component {
  static propTypes = {
    onChangeQuery: PropTypes.func.isRequired
  };

  render() {
    return (
      <div className="search-books-bar">
        <BackButton />

        <SearchInput onChangeQuery={this.props.onChangeQuery} />
      </div>
    );
  }
}

export default SearchBar;
