import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import mpuzzle from "../../media/milleniumspuzzle.jpg"

function Header() {
  return (
    <div className="nav-container">
      <div className="nav-content">
        <Link className="nav-item" to="/yugidatabase">Yu-Gi-Oh! Card List</Link>
        <Link className="nav-item" to="/cardcreator">Card Creator</Link>
        <Link className="nav-item" to="/carddatabase">Card Creator Database</Link>
        <Link className="nav-item" to="/character">Character Index</Link>
        <Link className="nav-item" to="/about">About</Link>
      </div>
    </div>
  );
}

export default Header;
