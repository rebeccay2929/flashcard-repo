import React, { useEffect, useState } from "react";
import FlashCardList from "./components/FlashcardList";
import "./styles/App.css";
import axios from "axios";
function App() {
  const [flashcardsList, setFlashcardsList] = useState(sampleFlashcards);

  useEffect(() => {
    axios.get("https://opentdb.com/api.php?amount=10").then((res) => {
      setFlashcardsList(
        res.data.results.map((questionItem, index) => {
          const answer = questionItem.correct_answer;
          const options = [...questionItem.incorrect_answers, answer] 
          return {
            id: `${index} - ${Date.now()}`,
            questions: questionItem.question,
            answer: answer,
            options: options.sort(() => Math.random() - 0.5),
          };
        })
      );
      console.log(res.data);
    });
  }, []);

  return (
    
      <div>
        <FlashCardList flashcardsList={flashcardsList} />
      </div>
  
  );
}

const sampleFlashcards = [
  {
    id: 1,
    question: "what is 2 + 2",
    answer: "4",
    options: ["2", "3", "4", "5"],
  },
  {
    id: 2,
    question: "Question2",
    answer: "Answer",
    options: ["Answer", "Answer 1", "Answer 2", "Answer 3"],
  },
];
export default App;
