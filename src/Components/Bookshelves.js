//@flow
import React from "react";
import PropTypes from "prop-types";
import Bookshelf from "./Bookshelf";
import "../App.css";

const Bookshelves = ({ mybooks, onChangeShelf }) => {
  const getBookByShelves = () => {
    let categorizedbooks = {
      reading: [],
      read: [],
      want: []
    };
    mybooks.map(book => {
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
  };

  const { reading, read, want } = getBookByShelves();

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
};

Bookshelves.propTypes = {
  mybooks: PropTypes.array.isRequired,
  onChangeShelf: PropTypes.func.isRequired
};

export default Bookshelves;
