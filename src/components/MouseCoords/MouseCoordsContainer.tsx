import React from 'react';
import MouseCoords from './MouseCoords';
import styled from 'styled-components';

const MouseCoordsContainer: React.FC = () => {
  const [showCoords, setShowCoords] = React.useState(false);
  return (
    <Wrapper>
      <button onClick={() => setShowCoords(!showCoords)}>
        Toggle Mouse Coordinates
      </button>
      {showCoords && <MouseCoords />}
    </Wrapper>
  );
};

export default MouseCoordsContainer;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;
