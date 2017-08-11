//@flow
import React from "react";
import BackButton from "./BackButton";
import SearchInput from "./SearchInput";
import PropTypes from "prop-types";
import "../App.css";

const SearchBar = ({ onChangeQuery }) =>
  <div className="search-books-bar">
    <BackButton />

    <SearchInput onChangeQuery={onChangeQuery} />
  </div>;

SearchBar.propTypes = {
  onChangeQuery: PropTypes.func.isRequired
};

export default SearchBar;
