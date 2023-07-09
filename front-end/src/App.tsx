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
  const [selectedTopics, setSelectedTopics] = useState<string[]>([]);

  return (
    <>
      <Heading selectedTopics={selectedTopics} setSelectedTopics={setSelectedTopics}/>
      <Board />
    </>
  )
}

export default App
