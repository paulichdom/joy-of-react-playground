import React from 'react';
import styled from 'styled-components';

const Timer = () => {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    const intervalId = window.setInterval(() => {
      setCount((count) => count + 1);
    }, 1000);

    return () => {
      window.clearInterval(intervalId);
    };
  }, []);

  return (
    <Wrapper>
      <h1>Seconds since load:</h1>
      <Text>{count}</Text>
    </Wrapper>
  );
};

export default Timer;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  gap: 16px;
  background-color: hsl(145deg 80% 85%);
  border-radius: 8px;
  padding: 16px;
`;

const Text = styled.p`
  font-size: 2.5rem;
  font-weight: 700;
`;
