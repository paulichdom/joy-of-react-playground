import React from 'react';
import styled from 'styled-components';

const ToggleClock: React.FC<{ handleToggle: () => void }> = ({
  handleToggle,
}) => {
  console.info('ClockToggle render');
  return <Toggle onClick={handleToggle}>Toggle clock</Toggle>;
};

const ClockToggle = React.memo(ToggleClock)
export default ClockToggle

const Toggle = styled.button`
  padding: 8px 16px;
  background-color: white;
  border: 1px solid black;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #e5e5e5;
  }
`;
