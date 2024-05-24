import styled from 'styled-components';
import BigCoin from './BigCoin';

function CanadianToonie() {
  return (
    <Wrapper>
      <main>
        <BigCoin />
      </main>
      <footer>
        Your coin balance: <strong>0</strong>
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
