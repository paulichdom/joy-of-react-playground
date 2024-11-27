import React, {FormEvent, useState} from "react";
import {GameStatus} from "../Game";

type GuessInputProps = {
  gameStatus: GameStatus
  handleSubmitGuess: (tentativeGuess: string) => void;
}

const GuessInput: React.FC<GuessInputProps> = ({gameStatus, handleSubmitGuess}) =>  {
  const [tentativeGuess, setTentativeGuess] = useState('')

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    handleSubmitGuess(tentativeGuess);
    setTentativeGuess('');
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="guess-input-wrapper"
    >
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        required
        id="guess-input"
        type="text"
        minLength={5}
        maxLength={5}
        pattern="[a-aA-Z]{5}"
        title="5 letter word"
        value={tentativeGuess}
        onChange={(event) => {
          const nextGuess = event.target.value.toUpperCase()
          setTentativeGuess(nextGuess)
        }}
        disabled={gameStatus !== 'running'}
      />
    </form>
  );
}

export default GuessInput;
