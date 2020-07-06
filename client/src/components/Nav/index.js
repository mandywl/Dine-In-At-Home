import React from "react";
import "./style.css";

function Nav(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-3">
      <a className="navbar-brand" href="/">
        Google Books
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className={`nav-item ${props.active}`}>
            <a className="nav-link" href="/">
              Search <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/favorites">
              Favorites
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
