import GuessInput from "../GuessInput";

// Pick a random word on every page-load.
import {sample} from "../../utils.ts";
import {WORDS} from "../../data.ts";

const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  return <>
    <GuessInput />
  </>;
}

export default Game;
