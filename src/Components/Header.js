//@flow
import React, { Component } from "react";
import PropTypes from "prop-types";
import "../App.css";

class Header extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired
  };

  render() {
    const { title } = this.props;
    return (
      <div className="list-books-title">
        <h1>
          {title}
        </h1>
      </div>
    );
  }
}

export default Header;
