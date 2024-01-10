import React from "react";
import { useState } from "react";
import posts from "../data/posts.json";

const SearchBar = ({ setFilteredPosts }) => {
  // const [searchTitle, setSearchTitle] = useState("")
  // const [error, setError] = useState(false);
  // const [posts, setPosts] = useState(PostList());
  // const [allPosts, setAllPosts] = useState(PostList());
  const filterPosts = (search) => {
    return posts.filter(
      (post) =>
        post.title.toLowerCase().match(search.toLowerCase()) ||
        post.location.toLowerCase().match(search.toLowerCase())
    );
  };

  const handleOnChange = (e) => {
    console.log(e.target.value);
    const inputTitle = e.target.value;
    const result = inputTitle.length ? filterPosts(inputTitle) : posts;
    setFilteredPosts(result);
    // setSearchTitle(inputTitle);
  };

  return (
    <div>
      <div row g-3 align-items-center>
        <label htmlFor="searchTitle">Search posts by location</label>
        <input
          className="form-control me-2 mt-3 col-sm"
          type="text"
          // value={searchTitle}
          id="searchTitle"
          onChange={handleOnChange}
        />
        {/* <button
          onClick={setSearchTitle("")}
          className="btn btn-warning mt-3"
          type="cancel"
        >
          Cancel
        </button> */}
      </div>
      <div className="alert alert-danger" role="alert">
        A simple danger alert—check it out!
      </div>
    </div>
  );
};

export default SearchBar;
