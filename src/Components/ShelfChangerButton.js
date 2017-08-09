//@flow
import React, { Component } from "react";
import PropTypes from "prop-types";
import "../App.css";

class ShelfChangerButton extends Component {
  static propTypes = {
    bookid: PropTypes.string.isRequired,
    onChangeShelf: PropTypes.func.isRequired,
    currentShelf: PropTypes.string
  };

  state = {
    currentShelf: "none"
  };

  componentDidMount() {
    this.setState({ currentShelf: this.props.currentShelf });
  }

  render() {
    const { bookid, onChangeShelf } = this.props;
    return (
      <div className="book-shelf-changer">
        <select
          value={this.state.currentShelf}
          onChange={e => {
            onChangeShelf(bookid, e.target.value);
            this.setState({ currentShelf: e.target.value });
          }}
        >
          <option value="none" disabled>
            Move to...
          </option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
      </div>
    );
  }
}

export default ShelfChangerButton;
