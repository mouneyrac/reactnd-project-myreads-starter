//@flow
import React, { Component } from "react";
import PropTypes from "prop-types";
import "../App.css";

class ShelfHeader extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired
  };

  render() {
    const { title } = this.props;
    return (
      <h2 className="bookshelf-title">
        {title}
      </h2>
    );
  }
}

export default ShelfHeader;
