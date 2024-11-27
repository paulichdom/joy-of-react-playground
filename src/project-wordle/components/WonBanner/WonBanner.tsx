import * as React from 'react';
import Banner from "../Banner";

type WonBannerProps = {
  numOfGuesses: number;
}

const WonBanner: React.FC<WonBannerProps> = ({numOfGuesses}) => {
  return <Banner status='happy'>
    <p>
      <strong>Congratulations!</strong> Got it in
      {' '}
      <strong>
        {numOfGuesses === 1
          ? '1 guess'
          : `${numOfGuesses} guesses`}
      </strong>.
    </p>
  </Banner>;
}

export default WonBanner;
