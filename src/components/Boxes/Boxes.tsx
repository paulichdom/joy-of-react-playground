import React from 'react';
import styled from 'styled-components';

type Box = {
  flex: number;
  background: string;
};

type BoxesProps = {
  boxes: Box[];
};

const Boxes: React.FC<BoxesProps> = ({ boxes }) => {
  return (
    <Wrapper>
      {boxes.map((boxStyles, index) => (
        <Box key={index} style={boxStyles} />
      ))}
    </Wrapper>
  );
};

export default Boxes;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  gap: 16px;
`;

const Box = styled.div`
  height: 100px;
  border-radius: 4px;
`;
