import React from "react";
import { useState } from "react";
import posts from "../data/posts.json";

const SearchBar = ({ filteredPosts, setFilteredPosts }) => {
  const [searchTitle, setSearchTitle] = useState("");
  const [error, setError] = useState(false);

  const filterPosts = (search) => {
    return posts.filter(
      (post) =>
        post.title.toLowerCase().match(search.toLowerCase()) ||
        post.location.toLowerCase().match(search.toLowerCase())
    );
  };

  const handleOnChange = (e) => {
    const inputTitle = e.target.value;
    const result = inputTitle.length ? filterPosts(inputTitle) : posts;
    setFilteredPosts(result);
    setSearchTitle(inputTitle);
  };

  // filteredPosts.length ? setError(false) : setError(true);

  const showError = () =>
    filteredPosts.length
      ? setError(false)
      : setError(true) && (
          <div className="alert alert-danger" role="alert">
            `No search found with the search term "{searchTitle}". Please try
            again.`
          </div>
        );

  return (
    <div>
      <div row g-3 align-items-center>
        <label htmlFor="searchTitle">Search posts by location</label>
        <input
          className="form-control me-2 mt-3 col-sm"
          type="text"
          value={searchTitle}
          id="searchTitle"
          onChange={handleOnChange}
        />
        <button
          onClick={() => setSearchTitle("")}
          className="btn btn-warning mt-3"
        >
          Cancel
        </button>
      </div>
      {showError}
    </div>
  );
};

export default SearchBar;
