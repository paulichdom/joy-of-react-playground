import React from "react";
import {range} from "../../utils.ts";

type GuessProps = {
  value: string | undefined;
}
const Guess: React.FC<GuessProps> = ({value}) => {
  return <p className="guess">
    {range(5).map((num) => (
      <span key={num} className="cell">{value ? value[num] : undefined}</span>
    ))}
  </p>;
}

export default Guess;
