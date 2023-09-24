import React, { useState, useEffect } from 'react';

const Post = ({ title, location, content, image }) => {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Effect to hide content when component mounts
    setShowContent(false);
  }, []);

  const toggleContent = () => {
    setShowContent(!showContent);
  };

  return (
    <div className="post">
      <h2>{title}</h2>
      <p className="location">{location}</p>
      {showContent ? <p>{content}</p> : null}
      <img src={image} alt={title} />
      <button onClick={toggleContent}>
        {showContent ? 'Hide Content' : 'Go to Post'}
      </button>
    </div>
  );
};

export default Post;