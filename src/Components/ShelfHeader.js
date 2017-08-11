//@flow
import React from "react";
import PropTypes from "prop-types";
import "../App.css";

const ShelfHeader = ({ title }) =>
  <h2 className="bookshelf-title">
    {title}
  </h2>;

ShelfHeader.propTypes = {
  title: PropTypes.string.isRequired
};

export default ShelfHeader;
