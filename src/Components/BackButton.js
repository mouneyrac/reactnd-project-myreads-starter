//@flow
import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../App.css";

class BackButton extends Component {
  render() {
    return (
      <Link className="close-search" to="/">
        Close
      </Link>
    );
  }
}

export default BackButton;
