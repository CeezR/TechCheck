import React from 'react';
import { useSwipeable } from 'react-swipeable';
import './QuestionCard.css'

type QuestionCardProps = {
  question: Question;
  onSwipeLeft: () => void;
  onSwipeRight: () => void;
};

const QuestionCard: React.FC<QuestionCardProps> = ({ question, onSwipeLeft, onSwipeRight }) => {
  const handlers = useSwipeable({
    onSwipedLeft: () => onSwipeLeft(),
    onSwipedRight: () => onSwipeRight(),
    //preventDefaultTouchmoveEvent: true,
    trackMouse: true
  });

  return (
    <div className="flip-card" {...handlers}>
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
  );
};

export default QuestionCard;

