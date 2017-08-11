//@flow
import React from "react";
import PropTypes from "prop-types";
import "../App.css";

const Header = ({ title }) =>
  <div className="list-books-title">
    <h1>
      {title}
    </h1>
  </div>;

Header.propTypes = {
  title: PropTypes.string.isRequired
};

export default Header;
