import React, { useState } from "react";
import FlashCardList from "./components/FlashcardList";
import './styles/App.css'
function App() {
  const [flashcardsList, setFlashcardsList] = useState(sampleFlashcards);

  return (
    <> 
    <div>
    <FlashCardList flashcardsList={flashcardsList} />
    </div>
    </>
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
