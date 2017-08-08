//@flow
import React, { Component } from "react";
import PropTypes from "prop-types";
import Bookshelf from "./Bookshelf";
import "../App.css";

class Bookshelves extends Component {
  static propTypes = {
    mybooks: PropTypes.array.isRequired,
    onChangeShelf: PropTypes.func.isRequired
  };

  getBookByShelves() {
    let categorizedbooks = {
      reading: [],
      read: [],
      want: []
    };
    this.props.mybooks.map(book => {
      switch (book.shelf) {
        case "currentlyReading":
          categorizedbooks.reading.push(book);
          break;
        case "wantToRead":
          categorizedbooks.want.push(book);
          break;
        case "read":
          categorizedbooks.read.push(book);
          break;
        default:
          break;
      }
      return book; //no useful.
    });
    return categorizedbooks;
  }

  render() {
    const { reading, read, want } = this.getBookByShelves();
    const { onChangeShelf } = this.props;
    return (
      <div className="list-books-content">
        <div>
          <Bookshelf
            title="Currently Reading"
            books={reading}
            onChangeShelf={onChangeShelf}
          />
          <Bookshelf
            title="Want to Read"
            books={want}
            onChangeShelf={onChangeShelf}
          />
          <Bookshelf title="Read" books={read} onChangeShelf={onChangeShelf} />
        </div>
      </div>
    );
  }
}

export default Bookshelves;
