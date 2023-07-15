import React, { useState, useEffect } from 'react';
import QuestionCard from './QuestionCard';

type QuestionListProps = {
  questions: Question[];
};

const QuestionList: React.FC<QuestionListProps> = ({ questions }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const handleSwipeLeft = () => {
    // Handle the swipe left event (e.g., go to the next question)
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  }

  const handleSwipeRight = () => {
    // Handle the swipe right event (e.g., go to the previous question)
    setCurrentQuestionIndex(currentQuestionIndex - 1);
  }

  useEffect(() => {
    // Make sure the current question index doesn't go out of bounds
    if (currentQuestionIndex < 0) {
      setCurrentQuestionIndex(0);
    } else if (currentQuestionIndex > questions.length - 1) {
      setCurrentQuestionIndex(questions.length - 1);
    }
  }, [currentQuestionIndex, questions.length]);

  return (
    <QuestionCard
      question={questions[currentQuestionIndex]}
      onSwipeLeft={handleSwipeLeft}
      onSwipeRight={handleSwipeRight}
    />
  );
};

export default QuestionList;
