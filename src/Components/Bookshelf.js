//@flow
import React from "react";
import PropTypes from "prop-types";
import BookList from "./BookList";
import ShelfHeader from "./ShelfHeader";
import "../App.css";

const Bookshelf = ({ books, title, onChangeShelf }) =>
  <div className="bookshelf">
    <ShelfHeader title={title} />
    <BookList books={books} onChangeShelf={onChangeShelf} />
  </div>;

Bookshelf.propTypes = {
  title: PropTypes.string.isRequired,
  books: PropTypes.array.isRequired,
  onChangeShelf: PropTypes.func.isRequired
};

export default Bookshelf;
