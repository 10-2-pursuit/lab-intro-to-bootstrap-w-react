import React, { useState } from 'react';
import '../index.css'; // Import the CSS file

const SearchBar = ({ handleSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const cancelSearch = () => {
    setSearchQuery('');
    handleSearch({ target: { value: '' } });
  };

  const handleChange = (event) => {
    const newQuery = event.target.value;
    setSearchQuery(newQuery);
    handleSearch({ target: { value: newQuery } });
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-12">
          <div className="search-bar-container">
            <label htmlFor="search" className="form-label">
              Search posts for location...
            </label>
            <input
              id="search"
              className="form-control"
              type="text"
              placeholder="Search by title, location, or content..."
              value={searchQuery}
              onChange={handleChange}
            />
            <button className="btn btn-danger" onClick={cancelSearch}>
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
