import React from 'react';

import MemoizedGrid from './Grid';
import useMousePosition from '../../hooks/use-mouse-position.hook';
import styled from 'styled-components';

const PureGrid: React.FC = () => {
  const [numRows, setNumRows] = React.useState(12);
  const [numCols, setNumCols] = React.useState(12);

  const id = React.useId();

  const mousePosition = useMousePosition();

  return (
    <Wrapper>
      <MousePosition>
        {mousePosition.x} / {mousePosition.y}
      </MousePosition>
      <hr />
      <Form>
        <div>
          <label htmlFor={`${id}-rows`}>Rows:</label>
          <input
            id={`${id}-rows`}
            type="range"
            value={numRows}
            onChange={(event) => setNumRows(parseInt(event.target.value))}
            min={5}
            max={40}
          />
        </div>
        <div>
          <label htmlFor={`${id}-cols`}>Columns:</label>
          <input
            id={`${id}-cols`}
            type="range"
            value={numCols}
            onChange={(event) => setNumCols(parseInt(event.target.value))}
            min={5}
            max={40}
          />
        </div>
      </Form>
      <MemoizedGrid numRows={numRows} numCols={numCols} />
    </Wrapper>
  );
};

export default PureGrid;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const MousePosition = styled.p`
  min-width: 80px;
  align-self: center;
`;
