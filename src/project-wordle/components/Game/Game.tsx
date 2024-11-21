import GuessInput from "../GuessInput";
import GuessResults from "../GuessResults";

// Pick a random word on every page-load.
import {sample} from "../../utils.ts";
import {WORDS} from "../../data.ts";
import {useState} from "react";

export type Guess = {
  value: string;
  id: string;
}

const answer = sample(WORDS);
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = useState<Guess[]>([]);

  const handleSubmitGuess = (tentativeGuess: string) => {
    const nextGuess = {
      value: tentativeGuess,
      id: `${tentativeGuess}-${Math.random()}`,
    }
    setGuesses([...guesses, nextGuess]);
  }

  return (
    <>
      <GuessResults guesses={guesses} />
      <GuessInput handleSubmitGuess={handleSubmitGuess} />
    </>
  )
}

export default Game;
