import React, { useState } from 'react';
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
            <h3 className='fs-1'>{!fliped ? "Question" : "Answer"}</h3>
            <p className='flex-grow-1'>{question.question}</p>
            <h4 className='fs-5'>Topic: {question.topic}</h4>
          </div>
          <div className="flip-card-back p-3">
            <h3 className='fs-1'>{!fliped ? "Question" : "Answer"}</h3>
            <p className='flex-grow-1'>{question.answer}</p>
            <h4 className='fs-5'>Topic: {question.topic}</h4>
          </div>
        </div>
      </div>
    </>
  );
};

export default QuestionCard;

