//@flow
import React from "react";
import PropTypes from "prop-types";
import BookTop from "./BookTop";
import BookDetails from "./BookDetails";
import "../App.css";

const Book = ({
  bookid,
  bookimg,
  title,
  authors,
  currentShelf,
  onChangeShelf
}) =>
  <div className="book">
    <BookTop
      bookid={bookid}
      bookimg={bookimg}
      currentShelf={currentShelf}
      onChangeShelf={onChangeShelf}
    />
    <BookDetails title={title} authors={authors} />
  </div>;

Book.propTypes = {
  bookid: PropTypes.string.isRequired,
  bookimg: PropTypes.string.isRequired,
  currentShelf: PropTypes.string,
  title: PropTypes.string.isRequired,
  authors: PropTypes.array,
  onChangeShelf: PropTypes.func.isRequired
};

export default Book;
