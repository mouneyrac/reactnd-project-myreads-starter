//@flow
import React, { Component } from "react";
import PropTypes from "prop-types";
import Bookshelves from "./Bookshelves";
import Header from "./Header";
import SearchButton from "./SearchButton";
import "../App.css";

class Myreads extends Component {
  static propTypes = {
    mybooks: PropTypes.array.isRequired,
    onChangeShelf: PropTypes.func.isRequired
  };

  render() {
    const { mybooks, onChangeShelf } = this.props;
    return (
      <div className="list-books">
        <Header title="MyReads" />
        <Bookshelves mybooks={mybooks} onChangeShelf={onChangeShelf} />
        <SearchButton />
      </div>
    );
  }
}

export default Myreads;
