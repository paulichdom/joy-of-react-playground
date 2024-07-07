import { format } from 'date-fns/format';
import styled from 'styled-components';

const Clock: React.FC<{time: Date}> = ({time}) => {
  return <ClockWrapper>{format(time, 'hh:mm:ss a')}</ClockWrapper>;
}

export default Clock;

const ClockWrapper = styled.p`
  font-size: 2.5rem;
  font-family: monospace;
`;

