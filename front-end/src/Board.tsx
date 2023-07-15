import { useEffect, useState } from 'react'
import './Board.css'
import QuestionList from './QuestionList';



type ApiResponse = {
  questions: Question[];
};

type BordProps = {
  selectedTopics: string[]
}

const Board = ({selectedTopics}: BordProps) => {
  const [questions, setQuestions] = useState<Question[]>([]);

  useEffect(() => {
    const topicsQueryParam = encodeURIComponent(selectedTopics.join(';;'));
    console.log(`http://localhost:8080/api/topics/bynames?topics=${topicsQueryParam}`);
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
    <main className='board flex-container p-3'>
      {questions.length > 0 && <QuestionList questions={questions}/>}
    </main>
  )
}

export default Board