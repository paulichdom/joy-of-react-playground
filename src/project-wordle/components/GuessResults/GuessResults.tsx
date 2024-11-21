import React from "react";
import {Guess} from "../Game";

type GuessResultsProps = {
  guesses: Guess[]
}

const GuessResults: React.FC<GuessResultsProps> = ({guesses}) =>  {
  return (
    <div className="guess-results">
      {guesses.map((guess) => (
        <p key={guess.id} className="guess">{guess.value}</p>
      ))}
    </div>
  );
}

export default GuessResults;
