import {Fragment, useState} from "react";

import GuessInput from "../GuessInput";
import GuessResults from "../GuessResults";
import WonBanner from "../WonBanner";
import LostBanner from "../LostBanner";
// Pick a random word on every page-load.
import {sample} from "../../utils.ts";
import {WORDS} from "../../data.ts";
import {NUM_OF_GUESSES_ALLOWED} from "../../constants.ts";

export type GameStatus = 'running' | 'won' | 'lost'

export type GuessType = {
  value: string;
  id: string;
}

const answer = sample(WORDS);
console.info({ answer });

function Game() {
  const [gameStatus, setGameStatus] = useState<GameStatus>('running');
  const [guesses, setGuesses] = useState<GuessType[]>([]);

  const handleSubmitGuess = (tentativeGuess: string) => {
    const nextGuess = {
      value: tentativeGuess,
      id: `${tentativeGuess}-${Math.random()}`,
    }
    const nextGuesses = [...guesses, nextGuess]
    setGuesses(nextGuesses);

    if(tentativeGuess.toUpperCase() === answer) {
      setGameStatus('won');
    } else if (nextGuesses.length >= NUM_OF_GUESSES_ALLOWED) {
      setGameStatus('lost')
    }
  }

  return (
    <Fragment>
      <GuessResults
        guesses={guesses}
        answer={answer}
      />
      <GuessInput
        gameStatus={gameStatus}
        handleSubmitGuess={handleSubmitGuess}
      />
      {gameStatus === 'won' && (
        <WonBanner numOfGuesses={guesses.length}
        />
      )}
      {gameStatus === 'lost' && (
        <LostBanner answer={answer}
        />
      )}
    </Fragment>
  )
}

export default Game;
