import {FormEvent, useState} from "react";

function GuessInput() {
  const [guess, setGuess] = useState('')

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log({ guess })
    setGuess('');
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
        value={guess}
        onChange={(event) => {
          const nextGuess = event.target.value.toUpperCase()
          setGuess(nextGuess)
        }}
      />
    </form>
  );
}

export default GuessInput;
