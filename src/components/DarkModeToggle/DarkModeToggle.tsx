import React from 'react';
import Toggle from './Toggle';
import styled from 'styled-components';

const IS_DARK_MODE = 'is-dark-mode';

function App() {
  const [isDarkMode, setIsDarkMode] = React.useState(() => {
    const storedModeValue = window.localStorage.getItem(IS_DARK_MODE);
    return storedModeValue?.toLowerCase() === 'true';
  });

  React.useEffect(() => {
    window.localStorage.setItem(IS_DARK_MODE, isDarkMode ? 'true' : 'false');
  }, [isDarkMode]);

  return (
    <Wrapper $isDarkMode={isDarkMode}>
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
  $isDarkMode: boolean;
};

const Wrapper = styled.div<WrapperProps>`
  display: flex;
  justify-content: center;
  background-color: ${({ $isDarkMode }) => ($isDarkMode ? 'black' : 'white')};
  color: ${({ $isDarkMode }) => ($isDarkMode ? 'white' : 'black')};
  height: 100%;
`;
