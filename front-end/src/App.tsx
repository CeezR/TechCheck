import { useEffect, useState } from "react";

type Question = {
  id: string,
  question: string,
  answer: string,
}

function App() {
  const [questions, setQuestions] = useState<Question[]>([]);

  const fetchQuestions = async () => {

    try {
      const response = await fetch("http://localhost:8080/api/questions")
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      console.log(response);
      const data: Question[] = await response.json();
      setQuestions(data);
      
    } catch (error) {
      console.error('Error:', error);
    }
  }

  useEffect(() => {
    fetchQuestions();
  }, [])

  return (
    <>
      <ul>
        {questions.map((question) => <li>Question: {question.question} Answer: {question.answer}</li>)}
      </ul>
    </>
  )
}

export default App
