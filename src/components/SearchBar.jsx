import React, { useState } from 'react';

const SearchBar = ({ handleSearch }) => {
  const [query, setQuery] = useState(''); // Store the query in component state

  const cancelSearch = () => {
    setQuery(''); // Clear the query
    handleSearch({ target: { value: '' } }); // Pass an event object with an empty value
  };

  const handleChange = (event) => {
    const newQuery = event.target.value;
    setQuery(newQuery);
    handleSearch({ target: { value: newQuery } }); // Pass an event object with the new value
  };

  return (
    <div className="container-fluid"> {/* Use Bootstrap container */}
      <div className="row">
        <div className="col-lg-12"> {/* Use Bootstrap grid system */}
          <label htmlFor="search" className="search-label">Search posts for location...</label>
          <input
            id="search"
            className="search form-control" // Use Bootstrap form-control class
            type="text"
            placeholder="Search by title, location, or content"
            value={query} // Bind the input value to the query state
            onChange={handleChange} // Call handleChange on input change
          />
          <button className="cancel-button btn btn-danger" onClick={cancelSearch}>Cancel</button> {/* Use Bootstrap btn classes */}
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
