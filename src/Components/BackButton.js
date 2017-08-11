//@flow
import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

const BackButton = () =>
  <Link className="close-search" to="/">
    Close
  </Link>;

export default BackButton;
