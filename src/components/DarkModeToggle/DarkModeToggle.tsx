/*
Local Storage cheatsheet:

// To save an item:
window.localStorage.setItem('is-dark-mode', true);

// To retrieve the value:
JSON.parse(window.localStorage.getItem('is-dark-mode'));
*/

import React from 'react';
import Toggle from './Toggle';
import styled from 'styled-components';

function App() {
  const [isDarkMode, setIsDarkMode] = React.useState(false);

  console.log({isDarkMode})

  return (
    <Wrapper isDarkMode={isDarkMode}>
      <Toggle
        label="Dark Mode"
        checked={isDarkMode}
        handleToggle={setIsDarkMode}
        backdropColor={isDarkMode ? 'white' : 'black'}
      />
    </Wrapper>
  );
}

export default App;

type WrapperProps = {
  isDarkMode: boolean;
};

const Wrapper = styled.div<WrapperProps>`
  display: flex;
  justify-content: center;
  background-color: ${({isDarkMode}) => (isDarkMode ? 'black' : 'white')};
  color: ${({isDarkMode}) => (isDarkMode ? 'white' : 'black')};
  height: 100%;
`;
