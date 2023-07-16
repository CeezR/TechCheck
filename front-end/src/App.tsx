import { useEffect, useState } from "react";
import Heading from "./Heading";
import Board from "./Board";
import './index.css'

function App() {
  const [topics, setTopics] = useState<string[]>();
  const [selectedTopics, setSelectedTopics] = useState<string[]>([]);

  useEffect(() => {
    fetch('https://tech-check-cesar.azurewebsites.net/api/topics')
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
      <Board selectedTopics={selectedTopics} />
    </>
  )
}

export default App
