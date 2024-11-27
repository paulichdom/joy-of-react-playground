import * as React from 'react';
import {GameStatus} from "../Game";

type GameOverBannerProps = {
  gameStatus: GameStatus;
  numOfGuesses: number;
  answer: string;
}

const GameOverBanner: React.FC<GameOverBannerProps> = ({gameStatus, numOfGuesses, answer}) => {
  if(gameStatus === 'won') {
    return (<div className="happy banner">
      <p>
        <strong>Congratulations!</strong> Got it in
        {' '}
        <strong>
          {numOfGuesses === 1
            ? '1 guess'
            : `${numOfGuesses} guesses` }
        </strong>.
      </p>
    </div>)
  } else if (gameStatus === 'lost') {
    return (
      <div className="sad banner">
        <p>Sorry, the correct answer is <strong>{answer}</strong>.</p>
      </div>
    )
  }
}

export default GameOverBanner;
