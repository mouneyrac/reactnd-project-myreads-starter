//@flow
import React from "react";
import PropTypes from "prop-types";
import Bookshelves from "./Bookshelves";
import Header from "./Header";
import SearchButton from "./SearchButton";
import "../App.css";

const Myreads = ({ mybooks, onChangeShelf }) =>
  <div className="list-books">
    <Header title="MyReads" />
    <Bookshelves mybooks={mybooks} onChangeShelf={onChangeShelf} />
    <SearchButton />
  </div>;

Myreads.propTypes = {
  mybooks: PropTypes.array.isRequired,
  onChangeShelf: PropTypes.func.isRequired
};

export default Myreads;
