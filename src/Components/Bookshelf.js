//@flow
import React, { Component } from "react";
import PropTypes from "prop-types";
import BookList from "./BookList";
import ShelfHeader from "./ShelfHeader";
import "../App.css";

class Bookshelf extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    books: PropTypes.array.isRequired,
    onChangeShelf: PropTypes.func.isRequired
  };

  render() {
    const { title, books, onChangeShelf } = this.props;
    return (
      <div className="bookshelf">
        <ShelfHeader title={title} />
        <BookList books={books} onChangeShelf={onChangeShelf} />
      </div>
    );
  }
}

export default Bookshelf;
