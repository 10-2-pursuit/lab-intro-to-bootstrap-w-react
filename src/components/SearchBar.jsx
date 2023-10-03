import React, { useState } from 'react';
import '../index.css'; // Import the CSS file
import { Container, Row, Col, Card } from 'react-bootstrap';
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
            <div className="d-flex"> {/* Use Bootstrap d-flex class for flex layout */}
              <label htmlFor="search" className="search-label">Search posts for location...</label>
              <input
                id="search"
                className="search form-control flex-grow-1" // Use Bootstrap form-control and flex-grow-1 class
                type="text"
                placeholder="Search by title, location, or content"
                value={searchQuery}
                onChange={handleChange}
              />
              <button className="cancel-button btn btn-danger" onClick={cancelSearch}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default SearchBar;
  