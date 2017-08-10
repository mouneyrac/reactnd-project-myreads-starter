//@flow
import React, { Component } from "react";
import PropTypes from "prop-types";
import Book from "./Book";
import "../App.css";

class BookList extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    onChangeShelf: PropTypes.func.isRequired
  };

  render() {
    const { books, onChangeShelf } = this.props;

    return (
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
      </div>
    );
  }
}

export default BookList;
