import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Header = ({ handlePopularPostsClick, handleHidePopularPosts }) => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">
  <h1 style={{ color: 'black', fontWeight: 'bold', fontFamily: 'new Times Roman', marginRight: '0px', paddingRight: '0px' }}>
    Travel
  </h1>
  <h1 style={{ color: 'orange', fontWeight: 'bold', fontFamily: 'Great Vibes, Cursive', marginLeft: '0px', paddingLeft: '0px' }}>
    Blog
  </h1>
</Link>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link" to="/" onClick={handleHidePopularPosts}>
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
