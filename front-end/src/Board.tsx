import React, { useEffect, useState } from 'react'
import TopicFilter from './TopicFilter'
import Flipcard from './Flipcard'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


type ApiResponse = {
  questions: Question[];
};

type BordProps = {
  selectedTopics: string[]
}

const Board = ({selectedTopics}: BordProps) => {
  const [questions, setQuestions] = useState<Question[]>([]);

  useEffect(() => {
    const topicsQueryParam = selectedTopics.join(',');
    fetch(`http://localhost:8080/api/topics/bynames?topics=${topicsQueryParam}`)
      .then(response => {
        if (!response.ok) { 
          throw new Error('Network response was not ok'); 
        }
        return response.json();
      })
      .then((data: ApiResponse) => {
        console.log(data);
        setQuestions(data.questions)
      })
      .catch(error => console.error('Error:', error));
  }, [selectedTopics]);

  return (
    <>
    <Container>
      {questions.map((question, index) => {
          return <Row>
                    <Col><Flipcard key={index} topic={question.topic} question={question.question} answer={question.answer} /></Col>
                 </Row>
      })}
    </Container>
    </>
  )
}

export default Board