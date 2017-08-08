//@flow
import React, { Component } from "react";
import PropTypes from "prop-types";
import "../App.css";

class BookDetails extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    authors: PropTypes.array.isRequired
  };

  render() {
    const { title, authors } = this.props;
    return (
      <div>
        <div className="book-title">
          {title}
        </div>
        <div className="book-authors">
          {authors.join(", ")}
        </div>
      </div>
    );
  }
}

export default BookDetails;
