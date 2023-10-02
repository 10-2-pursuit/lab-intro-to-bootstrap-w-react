import React, { useState } from 'react';
import { Container, Card, Button } from 'react-bootstrap';
import images from '../images'; // Import the images module
import '../index.css'; // Import the CSS file

const Post = ({ post, onReadMoreClick, onReadLessClick }) => {
  const [expanded, setExpanded] = useState(false);

  const handleReadMoreClick = () => {
    setExpanded(true);
    if (onReadMoreClick) {
      onReadMoreClick(post.id); // Notify the parent component of the click
    }
  };

  const handleReadLessClick = () => {
    setExpanded(false);
    if (onReadLessClick) {
      onReadLessClick(post.id); // Notify the parent component of the click
    }
  };

  return (
    <Container>
      <Card className="post-card">
        <div className="aspect-ratio-container">
          {/* Set a fixed height container and use padding for aspect ratio */}
          <div className="aspect-ratio-content">
            {/* Use the imported images */}
            <Card.Img
              src={`../src/images/${post.location.toLowerCase()}.jpg`}
              alt={post.location}
              className="card-image"
            />
          </div>
        </div>
        <Card.Body className="card-body-content">
          <Card.Title>{post.title}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{post.location}</Card.Subtitle>
          {expanded ? (
            <Card.Text>{post.content}</Card.Text>
          ) : (
            <Card.Text>{post.content.substring(0, 100)}...</Card.Text>
          )}
          <Button onClick={expanded ? handleReadLessClick : handleReadMoreClick} variant="primary">
            {expanded ? "Read Less" : "Read More"}
          </Button>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Post;
