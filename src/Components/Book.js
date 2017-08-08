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
    bookwidth: PropTypes.number.isRequired,
    bookheight: PropTypes.number.isRequired,
    currentShelf: PropTypes.string,
    title: PropTypes.string.isRequired,
    authors: PropTypes.array.isRequired,
    onChangeShelf: PropTypes.func.isRequired
  };

  render() {
    const {
      bookid,
      bookimg,
      bookwidth,
      bookheight,
      title,
      authors,
      currentShelf,
      onChangeShelf
    } = this.props;
    return (
      <div className="book">
        <BookTop
          bookid={bookid}
          bookheight={bookheight}
          bookwidth={bookwidth}
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
