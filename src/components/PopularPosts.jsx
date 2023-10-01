import React from "react";
import Post from "./Post"; // Import the Post component

const PopularPosts = ({ popularPosts, expanded }) => {
  // Function to sort posts by popularity in descending order
  const sortedPosts = popularPosts.sort((a, b) => b.popularity - a.popularity);

  return (
    <div>
      <h2>Popular Posts</h2>
      {sortedPosts.map((post) => (
        <Post
          key={post.id}
          post={post}
          expanded={expanded} // Pass the 'expanded' state as a prop
        />
      ))}
    </div>
  );
};

export default PopularPosts;
