import React, { useState } from 'react';
import { Container, Card, Button } from 'react-bootstrap';
import images from '../images'; // Import the images module

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
      <Card style={{ marginTop: '20px', marginBottom: '20px' }}>
        <div style={{ position: 'relative', paddingTop: '75%' }}>
          {/* Set a fixed height container and use padding for aspect ratio */}
          <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}>
            {/* Use the imported images */}
            <Card.Img
              src={`./src/images/${post.location}.jpg`}
              alt={post.location}
              style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            />
          </div>
        </div>
        <Card.Body style={{objectFit: 'cover', width: '100%', height: '100%'}}>
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
