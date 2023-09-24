import React from 'react';

const Header = () => {
  return (
    <header>
      <nav>
        <div className="logo">Travel Blog</div>
        <ul>
          <li><a href="#">Popular Posts</a></li>
          <li><a href="#">About</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;