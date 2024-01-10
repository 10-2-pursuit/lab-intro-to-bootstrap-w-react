import React from "react";
import Post from "./Post";
// import posts from "../data/posts.json";

const PostList = ({ filteredPosts }) => {
  return (
    <div>
      {filteredPosts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
};

export default PostList;
