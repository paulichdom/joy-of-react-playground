import * as React from 'react';
import BigCoin from '../CanadianToonie/BigCoin';
import FloatingText from './FloatingText';
import styled from 'styled-components';

const PIGGY_BANK_COST = 9;

function ToonieClicker() {
  const [numOfCoins, setNumOfCoins] = React.useState(0);
  const [numOfPiggyBanks, setNumOfPiggyBanks] = React.useState(0);
  const [floatingTextKey, setFloatingTextKey] = React.useState('initial');

  const clickCoin = () => {
    setNumOfCoins(numOfCoins + 2);
    setFloatingTextKey(crypto.randomUUID());
  };

  const buyPiggyBank = () => {
    setNumOfCoins(numOfCoins - PIGGY_BANK_COST);
    setNumOfPiggyBanks(numOfPiggyBanks + 1);
  };

  return (
    <Wrapper>
      <Main>
        <BigCoin handleCoinClick={clickCoin} />
        {floatingTextKey !== 'initial' && (
          <FloatingNumWrapper>
            <FloatingText key={floatingTextKey}>+2</FloatingText>
          </FloatingNumWrapper>
        )}
        <Button disabled={numOfCoins < PIGGY_BANK_COST} onClick={buyPiggyBank}>
          Buy Piggy Bank
          {numOfPiggyBanks > 0 && `(${numOfPiggyBanks})`}
        </Button>
      </Main>
      <Footer>
        <p>Your coin balance:</p>
        <strong>{numOfCoins}</strong>
      </Footer>
    </Wrapper>
  );
}

export default ToonieClicker;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 48px;
`;

const Main = styled.main`
  position: relative;
  display: grid;
  gap: 32px;
  place-content: center;
`;

const FloatingNumWrapper = styled.div`
  position: absolute;
  top: -48px;
  right: 70px;
  padding: 32px;
  font-size: 3rem;
  font-weight: bold;
  font-family: Verdana, sans-serif;
  color: hotpink;
  pointer-events: none;
  user-select: none;
`;

const Button = styled.button``;

const Footer = styled.footer`
  padding: 16px;
  font-family: Verdana, sans-serif;
  font-size: 1.5rem;
  font-weight: 500;
  text-align: center;
`;
