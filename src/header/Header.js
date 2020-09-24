import React, { Component } from "react";
import {Link } from "react-router-dom";
import "../style/Header.css";

class Header extends Component {
  render() {
    return (
      <div className="header">
        <ul>
        <li>
            <Link to="/managecard">Manage Cards</Link>
          </li>
          <li>
            <Link to="/flashcard">Flash Card</Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default Header;
