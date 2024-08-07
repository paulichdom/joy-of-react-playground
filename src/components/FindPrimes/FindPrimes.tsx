import * as React from 'react';
import { isPrime } from '../../helpers';
import styled from 'styled-components';
import { useTime } from '../DigitalClock/use-time.hook';
import { format } from 'date-fns/format';

export const FindPrimes = () => {
  // We hold the user's selected number in state.
  const [selectedNum, setSelectedNum] = React.useState(100);
  const time = useTime();

  // We calculate all of the prime numbers between 0 and the
  // user's chosen number, `selectedNum`:
  const allPrimes = React.useMemo(() => {
    const result = [];

    for (let counter = 2; counter < selectedNum; counter++) {
      if (isPrime(counter)) {
        result.push(counter);
      }
    }

    return result;
  }, [selectedNum]);

  return (
    <Wrapper>
      <p className="clock">{format(time, 'hh:mm:ss a')}</p>
      <Form>
        <label htmlFor="num">Your number:</label>
        <input
          id="num"
          type="number"
          value={selectedNum}
          onChange={(event) => {
            // To prevent computers from exploding,
            // we'll max out at 100k
            const num = Math.min(100_000, Number(event.target.value));

            setSelectedNum(num);
          }}
        />
      </Form>
      <p>
        There are {allPrimes.length} prime(s) between 1 and {selectedNum}:{' '}
        <span className="prime-list">{allPrimes.join(', ')}</span>
      </p>
    </Wrapper>
  );
};

export default FindPrimes;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;
`;
