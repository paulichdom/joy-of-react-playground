import React from 'react';
import { range } from '../../utils';
import styled from 'styled-components';

type Grid = {
  numRows: number;
  numCols: number;
};

const Grid: React.FC<Grid> = ({ numRows, numCols }) => {
  console.info('Grid render');

  return (
    <Wrapper>
      {range(numRows).map((rowIndex) => (
        <Row key={rowIndex}>
          {range(numCols).map((colIndex) => (
            <Cell key={colIndex} />
          ))}
        </Row>
      ))}
    </Wrapper>
  );
};

export default Grid;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

const Row = styled.div`
  display: flex;
  gap: 2px;
`;

const Cell = styled.div`
  flex: 1;
  aspect-ratio: 1/1;
  border: 1px solid hsl(0deg 0% 0% / 0.5);
`;
