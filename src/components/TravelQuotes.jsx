import React, { useEffect, useState } from 'react';
import quotes from '../data/quotes.json';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const TravelingQuotes = () => {
  const [randomQuote, setRandomQuote] = useState(null);

  useEffect(() => {
    // Function to select a random quote
    const getRandomQuote = () => {
      const randomIndex = Math.floor(Math.random() * quotes.length);
      return quotes[randomIndex];
    };

    // Fetch a random quote when the component mounts
    const quote = getRandomQuote();
    setRandomQuote(quote);
  }, []);

  return (
    <div className="traveling-quotes">
      <Container>
        <Row>
          <Col>
            {randomQuote && (
              <Card>
                <Card.Body className="text-center">
                  <Card.Text className='quote'>{randomQuote.quote}</Card.Text>
                  <Card.Text className="text-muted">- {randomQuote.author}</Card.Text>
                </Card.Body>
              </Card>
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default TravelingQuotes;
