// Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer>
      <ul>
        <li>
          <a href="#">Contact me</a>
        </li>
        <li>
          <a href="#">About the author</a>
        </li>
      </ul>
      <p>&copy; {new Date().getFullYear()} Your Website Name</p>
    </footer>
  );
};

export default Footer;
