import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Flipcard = ({topic, question, answer} : Question) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{topic}</Card.Title>
        <Card.Text>
          {question}
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default Flipcard