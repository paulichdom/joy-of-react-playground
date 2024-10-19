import * as React from 'react';
import BigCoin from '../CanadianToonie/BigCoin';
import FloatingText from './FloatingText';
import styled from 'styled-components';

function ToonieClicker() {
  const [numOfCoins, setNumOfCoins] = React.useState(0);
  return (
    <Wrapper>
      <Main>
        <BigCoin numOfCoins={numOfCoins} setNumOfCoins={setNumOfCoins} />
        {numOfCoins > 0 && (
          <FloatingNumWrapper>
            <FloatingText key={numOfCoins}>+2</FloatingText>
          </FloatingNumWrapper>
        )}
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

const Footer = styled.footer`
  padding: 16px;
  font-family: Verdana, sans-serif;
  font-size: 1.5rem;
  font-weight: 500;
  text-align: center;
`;
