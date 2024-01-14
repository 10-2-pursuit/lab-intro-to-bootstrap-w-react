import React from "react";
import "../index.css";

const Nav = () => {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <h1>
          Travel <span className="script-font text-warning">Blog</span>
        </h1>
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active" href="">
              About
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" href="">
              Popular posts
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
