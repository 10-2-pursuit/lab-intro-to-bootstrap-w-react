import React from "react";
import { useState } from "react";

const SearchBar = () => {
  return (
    <div row g-3 align-items-center>
      <form className="d-flex">
        Search posts by location
        <input
          className="form-control me-2 mt-3 col-sm"
          type="search"
          aria-label="Search"
        />
        <button className="btn btn-warning mt-3" type="cancel">
          Cancel
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
