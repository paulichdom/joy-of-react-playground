import React from "react";
import {range} from "../../utils.ts";
import {checkGuess} from "../../game-helpers.ts";

type CellProps = {
  letter: string | undefined;
  status: string | undefined;
}

const Cell: React.FC<CellProps> = ({letter, status}) => {
  const className = status
    ? `cell ${status}`
    : 'cell';
  return <span className={className}>{letter}</span>
}

type GuessProps = {
  value: string | undefined;
  answer: string;
}
const Guess: React.FC<GuessProps> = React.memo(({value, answer}) => {
  const result = checkGuess(value ?? '', answer);
  return <p className="guess">
    {range(5).map((num) => (
      <Cell
        key={num}
        letter={result?.[num].letter}
        status={result?.[num].status}
      />
    ))}
  </p>;
});

export default Guess;
