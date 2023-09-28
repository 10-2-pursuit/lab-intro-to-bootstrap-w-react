import React from 'react';
import Post from './Post';

const PostsList = ({ posts }) => {
  return (
    <section className="posts-list">
      <div className="grid-container">
        {posts.map((post) => (
          <Post key={post.id} {...post} />
        ))}
      </div>
    </section>
  );
};

export default PostsList;
