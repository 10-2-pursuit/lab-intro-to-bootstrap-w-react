import React, { useState } from 'react';

const Post = ({ title, location, content, image }) => {
  const [showContent, setShowContent] = useState(false);

  const toggleContent = () => {
    setShowContent(!showContent);
  };

  return (
    <div className="post">
      <h2>{title}</h2>
      <p className="location">{location}</p>
      <p className={showContent ? 'visible' : 'hidden'}>{content}</p>
      <img src={image} alt={title} />
      <button onClick={toggleContent}>
        {showContent ? 'Hide Content' : 'Go to Post'}
      </button>
    </div>
  );
};

export default Post;