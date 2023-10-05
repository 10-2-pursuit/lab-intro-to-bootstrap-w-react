// Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer className='footer'>
      <ul>
        <li className='contact-me'>
          <a href="#">Contact me</a>
        </li>
        <li className='about-the-author'>
          <a href="#">About the author</a>
        </li>
      </ul>
      <p className='date'>&copy; {new Date().getFullYear()} TravelBlog</p>
    </footer>
  );
};

export default Footer;
