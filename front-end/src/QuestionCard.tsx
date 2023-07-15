import React, { useState } from 'react';
import { useSwipeable } from 'react-swipeable';
import './QuestionCard.css'

type QuestionCardProps = {
  question: Question;
};

const QuestionCard: React.FC<QuestionCardProps> = ({ question }) => {
  const [fliped, setFliped] = useState(false);

  return (
    <>
      <div className={`flip-card ${fliped ? "fliped" : ""}`} onClick={() => setFliped(!fliped)}>
        <div className="flip-card-inner">
          <div className="flip-card-front p-3">
            <h3>{question.topic}</h3>
            <p>{question.question}</p>
          </div>
          <div className="flip-card-back p-3">
            <h3>{question.topic}</h3>
            <p>{question.answer}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default QuestionCard;

