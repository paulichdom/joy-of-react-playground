import * as React from 'react';
import { Plus } from 'react-feather';
import styled from 'styled-components';
import PureMegaBoost from './MegaBoost';

function MegaCounter() {
  const [count, setCount] = React.useState(0);

  const handleClick = React.useCallback(() => {
    setCount((currentValue) => currentValue + 1234);
  }, []);

  return (
    <Wrapper>
      Count: {count}
      <AddButton onClick={() => setCount(count + 1)}>
        <Plus />
      </AddButton>
      <PureMegaBoost handleClick={handleClick} />
    </Wrapper>
  );
}

export default MegaCounter;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`;

const AddButton = styled.button`
  padding: 4px 16px;
  color: green;
  background: white;
  border: 2px solid green;
  border-radius: 4px;
  transition-duration: 0.2s;

  &:hover {
    background-color: green;
    color: white;
  }
`;
