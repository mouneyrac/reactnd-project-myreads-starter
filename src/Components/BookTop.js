//@flow
import React, { Component } from "react";
import PropTypes from "prop-types";
import ShelfChangerButton from "./ShelfChangerButton";
import "../App.css";

class BookTop extends Component {
  static propTypes = {
    bookid: PropTypes.string.isRequired,
    bookimg: PropTypes.string.isRequired,
    currentShelf: PropTypes.string,
    onChangeShelf: PropTypes.func.isRequired
  };

  render() {
    const { bookid, bookimg, currentShelf, onChangeShelf } = this.props;
    return (
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
      </div>
    );
  }
}

export default BookTop;
