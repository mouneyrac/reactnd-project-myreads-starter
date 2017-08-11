//@flow
import React from "react";
import PropTypes from "prop-types";
import ShelfChangerButton from "./ShelfChangerButton";
import "../App.css";

const BookTop = ({ bookid, bookimg, currentShelf, onChangeShelf }) =>
  <div className="book-top">
    <div
      className="book-cover"
      style={{ backgroundImage: `url("${bookimg}")` }}
    />
    <ShelfChangerButton
      bookid={bookid}
      currentShelf={currentShelf}
      onChangeShelf={onChangeShelf}
    />
  </div>;

BookTop.propTypes = {
  bookid: PropTypes.string.isRequired,
  bookimg: PropTypes.string.isRequired,
  currentShelf: PropTypes.string,
  onChangeShelf: PropTypes.func.isRequired
};

export default BookTop;
