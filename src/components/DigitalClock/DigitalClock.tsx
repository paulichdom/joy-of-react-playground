import React from 'react';
import Clock from './Clock';
import styled from 'styled-components';

function DigitalClock() {
  const [showClock, setShowClock] = React.useState(true);

  return (
    <ClockContainer>
      <ClockToggle onClick={() => setShowClock(!showClock)}>
        {showClock ? 'Clock ON' : 'Clock OFF'}
      </ClockToggle>
      {showClock && <Clock />}
    </ClockContainer>
  );
}

export default DigitalClock;

const ClockContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  gap: 16px;
`;

const ClockToggle = styled.button`
  padding: 8px 16px;
  background-color: white;
  border: 1px solid black;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #e5e5e5;
  }
`;
