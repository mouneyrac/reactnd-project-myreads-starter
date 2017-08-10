//@flow
import React, { Component } from "react";
import PropTypes from "prop-types";
import BookTop from "./BookTop";
import BookDetails from "./BookDetails";
import "../App.css";

class Book extends Component {
  static propTypes = {
    bookid: PropTypes.string.isRequired,
    bookimg: PropTypes.string.isRequired,
    currentShelf: PropTypes.string,
    title: PropTypes.string.isRequired,
    authors: PropTypes.array,
    onChangeShelf: PropTypes.func.isRequired
  };

  render() {
    const {
      bookid,
      bookimg,
      title,
      authors,
      currentShelf,
      onChangeShelf
    } = this.props;
    return (
      <div className="book">
        <BookTop
          bookid={bookid}
          bookimg={bookimg}
          currentShelf={currentShelf}
          onChangeShelf={onChangeShelf}
        />
        <BookDetails title={title} authors={authors} />
      </div>
    );
  }
}

export default Book;
