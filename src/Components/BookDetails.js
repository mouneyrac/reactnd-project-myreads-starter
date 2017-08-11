//@flow
import React from "react";
import PropTypes from "prop-types";
import "../App.css";

const BookDetails = ({ title, authors }) =>
  <div>
    <div className="book-title">
      {title}
    </div>
    <div className="book-authors">
      {typeof authors === "undefined" ? "" : authors.join(", ")}
    </div>
  </div>;

BookDetails.propTypes = {
  title: PropTypes.string.isRequired,
  authors: PropTypes.array
};

export default BookDetails;
