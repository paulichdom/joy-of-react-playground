import React from 'react';
import styled from 'styled-components';

type BigCoinProps = {
  numOfCoins: number;
  setNumOfCoins: React.Dispatch<React.SetStateAction<number>>;
}

const BigCoin: React.FC<BigCoinProps> = ({numOfCoins, setNumOfCoins}) => {
  

  return (
    <div>
      <CoinButton onClick={() => setNumOfCoins(numOfCoins + 2)}>
        <VisuallyHidden>Add 2 coins</VisuallyHidden>
        <img alt="" src="https://sandpack-bundler.vercel.app/img/toonie.png" />
      </CoinButton>
    </div>
  );
}

export default BigCoin;

const VisuallyHidden = styled.span`
  display: none;
`;

const CoinButton = styled.button`
  display: block;
  background: transparent;
  border: none;
  width: 200px;
  cursor: pointer;

  will-change: transform;
  transition-duration: 200ms;
  transition-timing-function: ease;
  transition-delay: 0ms;
  transition-property: transform;

  &:hover {
    transform: scale(1.05);
  }

  &:active {
    transform: scale(1);
    transition-duration: 50ms;
  }
`;
