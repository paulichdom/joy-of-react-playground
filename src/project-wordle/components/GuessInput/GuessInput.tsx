import {FormEvent, useState} from "react";

function GuessInput() {
  const [guess, setGuess] = useState('')

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if(guess.length !== 5) {
      window.alert('Please enter exactly 5 characters.');
      return;
    }

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
