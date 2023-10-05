import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "../index.css"; // Import the CSS file

const Header = ({ handlePopularPostsClick, handleHidePopularPosts }) => {
  return (
    <header className="header">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/">
          <h1 className="title-dark">Travel</h1>
          <h1 className="title-orange">Blog</h1>
        </Link>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/"
                onClick={handleHidePopularPosts}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about">
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/popular"
                onClick={handlePopularPostsClick}
              >
                Popular Posts
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
