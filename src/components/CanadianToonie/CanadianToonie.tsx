import styled from 'styled-components';
import BigCoin from './BigCoin';
import React from 'react';

function CanadianToonie() {
  const [numOfCoins, setNumOfCoins] = React.useState(0);

  return (
    <Wrapper>
      <main>
        <BigCoin numOfCoins={numOfCoins} setNumOfCoins={setNumOfCoins} />
      </main>
      <footer>
        Your coin balance: <strong>{numOfCoins}</strong>
      </footer>
    </Wrapper>
  );
}

export default CanadianToonie;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  gap: 16px;
`;
