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
      // 1. Dril down the selectedTopics into the Board
      // 2. Inside the Board fetch Questions by selectedTopics
      // 3. Randomise the question order
      // 4. Line up the questions horizontaly, on swipe move to 
      // the next question.
      // 5. On click flip the question that show the answer
  }, []);

  return (
    <>
      <Heading topics={topics} selectedTopics={selectedTopics} setSelectedTopics={setSelectedTopics}/>
      <Board selectedTopics={selectedTopics} />
    </>
  )
}

export default App
