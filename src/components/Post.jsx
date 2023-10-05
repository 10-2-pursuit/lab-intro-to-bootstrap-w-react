import React, { useState } from 'react';
import burano from "../images/Burano.jpg";
import chicago from "../images/Chicago.jpg";
import dubai from "../images/Dubai.jpg";
import london from "../images/London.jpg";
import porto from "../images/Porto.jpg";
import san_diego from "../images/san_diego.jpg";
import san_francisco from "../images/san_francisco.jpg";
import seattle from "../images/seattle.jpg";
import sevilla from "../images/Sevilla.jpg";
import shibuya from "../images/shibuya.jpg";
import '../index.css'; // Import the CSS file
import { Button, Card, Container } from 'react-bootstrap';
import images from '../images/';

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
              src={`${ images [post.location] }`}
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
