import React from "react";
import FlashCard from "./Flashcard";



export default function FlashCardList({ flashcardsList }) {

    return ( 
      <div className="card-grid">
        {flashcardsList.map(flashcard => (
          <FlashCard flashcard={flashcard} key={flashcard.id} />
        ))}
      </div>
    );
  }