import React from 'react';
import { format } from 'date-fns/format';
import styled from 'styled-components';

function Clock() {
  const [time, setTime] = React.useState(new Date());

  React.useEffect(() => {
    setTime(new Date())
  }, [time])

  return (
    <ClockWrapper>
      {format(time, 'hh:mm:ss a')}
    </ClockWrapper>
  );
}

export default Clock;

const ClockWrapper = styled.p`
  font-size: 2.5rem;
  font-family: monospace;
`;