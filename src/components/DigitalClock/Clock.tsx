import { format } from 'date-fns/format';
import styled from 'styled-components';
import { useTime } from './use-time.hook';

function Clock() {
  const time = useTime();

  return <ClockWrapper>{format(time, 'hh:mm:ss a')}</ClockWrapper>;
}

export default Clock;

const ClockWrapper = styled.p`
  font-size: 2.5rem;
  font-family: monospace;
`;

