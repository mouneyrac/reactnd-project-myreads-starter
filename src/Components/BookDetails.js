//@flow
import React, { Component } from "react";
import PropTypes from "prop-types";
import "../App.css";

class BookDetails extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired
  };

  render() {
    const { title, author } = this.props;
    return (
      <div>
        <div className="book-title">
          {title}
        </div>
        <div className="book-authors">
          {author}
        </div>
      </div>
    );
  }
}

export default BookDetails;
