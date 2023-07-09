import { useEffect, useState } from "react";
import Heading from "./Heading";
import TopicFilter from "./TopicFilter";
import Board from "./Board";


type Question = {
  id: string,
  question: string,
  answer: string,
}

type ApiResponse = {
  questions: Question[];
};

function App() {
  const [topicQuestions, setTopicQuestions] = useState<Question[]>([]);

  const fetchQuestions = async () => {

    try {
      const response = await fetch("http://localhost:8080/api/questions");
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data: ApiResponse = await response.json();
      setTopicQuestions(data.questions);
      
    } catch (error) {
      console.error('Error:', error);
    }
  }

  useEffect(() => {
    fetchQuestions();
  }, [])

  return (
    <>
      <Heading />
      <Board />
    </>
  )
}

export default App
