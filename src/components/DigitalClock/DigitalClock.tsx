import Clock from './Clock';
import styled from 'styled-components';
import { useToggle } from '../../hooks/use-toggle';
import ClockToggle from './ClockToggle';
import { useTime } from './use-time.hook';

function DigitalClock() {
  const [showClock, toggleClock] = useToggle(true);
  const time = useTime();

  return (
    <ClockContainer>
      <ClockToggle handleToggle={toggleClock as () => void} />
      {showClock && <Clock time={time} />}
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
