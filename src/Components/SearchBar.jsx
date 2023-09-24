import React from 'react';

const SearchBar = () => {
  return (
    <section className="search-bar">
      <input type="text" placeholder="Search by title or location" />
      <button>Search</button>
    </section>
  );
};

export default SearchBar;