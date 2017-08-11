//@flow
import React from "react";
import PropTypes from "prop-types";
import Book from "./Book";
import "../App.css";

const BookList = ({ books, onChangeShelf }) =>
  <div className="bookshelf-books">
    <ol className="books-grid">
      {books.map(book =>
        <li key={book.id}>
          <Book
            bookid={book.id}
            bookimg={book.imageLinks.thumbnail}
            title={book.title}
            authors={book.authors}
            currentShelf={book.shelf}
            onChangeShelf={onChangeShelf}
          />
        </li>
      )}
    </ol>
  </div>;

BookList.propTypes = {
  books: PropTypes.array.isRequired,
  onChangeShelf: PropTypes.func.isRequired
};

export default BookList;
