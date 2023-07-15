import React from 'react';
import QuestionCard from './QuestionCard';
import './QuestionList.css'

type QuestionListProps = {
  questions: Question[];
};

const QuestionList: React.FC<QuestionListProps> = ({ questions }) => {

  return (
    <div className='questionList'>
      {questions.map((q, index) => {
        return <QuestionCard key={index} question={q} />
        
      })}
    </div>
  )
};

export default QuestionList;
