import React from 'react';
import VisuallyHidden from '../VisuallyHidden';
import styled from 'styled-components';

function UselessMachine() {
  const id = React.useId();
  const [isOn, setIsOn] = React.useState(true);

  React.useEffect(() => {
    if (isOn) return;

    const checkBoxTriggerId = window.setTimeout(() => {
      console.log('timeout triggered');
      setIsOn(true);
    }, 500);

    return () => clearTimeout(checkBoxTriggerId);
  }, [isOn]);

  return (
    <Wrapper>
      <Checkbox
        id={id}
        type="checkbox"
        checked={isOn}
        onChange={(event) => {
          setIsOn(event.target.checked);
        }}
      />
      <VisuallyHidden>
        <label htmlFor={id}>Toggle checkbox</label>
      </VisuallyHidden>
    </Wrapper>
  );
}

export default UselessMachine;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  background-color: hsl(200deg 1000% 88%);
`;

const Checkbox = styled.input`
  transform: scale(6);
`;
