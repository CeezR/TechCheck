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
  const [topics, setTopics] = useState<string[]>();
  const [selectedTopics, setSelectedTopics] = useState<string[]>([]);

  useEffect(() => {
    fetch('http://localhost:8080/api/topics')
      .then(response => {
        if (!response.ok) { 
          throw new Error('Network response was not ok'); 
        }
        return response.json();
      })
      .then(data => {
        setTopics(data.topics);
        setSelectedTopics(data.topics);
      })
      .catch(error => console.error('Error:', error));
  }, []);

  return (
    <>
      <Heading topics={topics} selectedTopics={selectedTopics} setSelectedTopics={setSelectedTopics}/>
      <Board />
    </>
  )
}

export default App
