import React, { useState } from "react";
import Post from "./Post";

const PostContainer = ({ posts }) => {
  const [displayPopularPosts, setDisplayPopularPosts] = useState(false);

  // Function to filter and sort posts by popularity
  const getPopularPosts = () => {
    return posts
      .filter((post) => post.popularity > 0)
      .sort((a, b) => b.popularity - a.popularity);
  };

  // Function to handle the "Popular Posts" link click
  const handlePopularPostsClick = () => {
    setDisplayPopularPosts(true);
  };

  // Function to handle the "Show All Posts" link click
  const handleHomeClick = () => {
    setDisplayPopularPosts(false);
  };

  // Define the onReadMoreClick function
  const onReadMoreClick = (postId) => {
    // Implement your logic here...
  };

  const onReadLessClick = () => {
    // Implement your logic here...
  };

  return (
    <div>
      {displayPopularPosts ? (
        // Render popular posts
        <div>
          {getPopularPosts().map((post) => (
            <Post
              key={post.id}
              post={post}
              onReadMoreClick={onReadMoreClick}
              onReadLessClick={onReadLessClick}
            />
          ))}
        </div>
      ) : (
        // Render all posts if `posts` is defined
        posts && posts.length > 0 ? (
          <div>
            {posts.map((post) => (
              <Post
                key={post.id}
                post={post}
                onReadMoreClick={onReadMoreClick}
                onReadLessClick={onReadLessClick}
              />
            ))}
          </div>
        ) : (
          // Render a loading indicator or message if `posts` is not defined
          <div>Loading...</div>
        )
      )}
    </div>
  );
};

export default PostContainer;
