import React, { useState } from 'react';
import { Container, Card, Button } from 'react-bootstrap';

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
      <Card>
        <Card.Img src={`../images/${post.location}`.jpg} alt={post.location} />
        <Card.Body>
          <Card.Title>{post.title}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{post.location}</Card.Subtitle>
          {expanded ? (
            <Card.Text>{post.content}</Card.Text>
          ) : (
            <Card.Text>{post.content.substring(0, 150)}...</Card.Text>
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
