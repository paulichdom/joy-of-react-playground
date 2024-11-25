import React from "react";
import {GuessType} from "../Game";
import Guess from "../Guess";
import {NUM_OF_GUESSES_ALLOWED} from "../../constants.ts";
import {range} from "../../utils.ts";

type GuessResultsProps = {
  guesses: GuessType[];
  answer: string;
}

const GuessResults: React.FC<GuessResultsProps> = ({guesses, answer}) =>  {
  return (
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((num) => (
        <Guess key={num} value={guesses[num]?.value} answer={answer} />
      ))}
    </div>
  );
}

export default GuessResults;
