import React, { useState } from 'react';

const SearchBar = ({ handleSearch, filteredPosts }) => {
  const [query, setQuery] = useState('');

  const cancelSearch = () => {
    setQuery('');
    handleSearch({ target: { value: '' } });
  };

  const handleChange = (event) => {
    const newQuery = event.target.value;
    setQuery(newQuery);
    handleSearch({ target: { value: newQuery } });
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-12">
          <div
            className="input-group"
            style={{ width: '1250px', alignContent: 'center', padding: '10px', margin: '10px 5px' }}
          >
            <label
              htmlFor="search"
              className="form-label"
              style={{ margin: '5px', fontStyle: 'italic', verticalAlign: 'center' }}
            >
              Search posts for location...
            </label>
            <input
              id="search"
              className="form-control flex-grow-1"
              type="text"
              placeholder="Search by title, location, or content..."
              value={query}
              onChange={handleChange}
            />
            <button className="btn btn-danger" onClick={cancelSearch}>
              Cancel
            </button>
          </div>
          {filteredPosts.length === 0 && query.length > 0 && (
            <div className="alert alert-warning mt-3">
              No posts found with the search term "{query}".
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
