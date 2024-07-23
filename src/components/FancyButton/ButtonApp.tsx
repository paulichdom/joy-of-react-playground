import React from 'react';
import FancyButton from './FancyButton';

const ButtonApp: React.FC = () => {
  const buttonRef = React.useRef(null);

  function logRef() {
    console.log('Captured ref:', buttonRef.current);
  }

  return (
    <FancyButton ref={buttonRef} onMouseEnter={logRef} onFocus={logRef}>
      Hover or Focus Me
    </FancyButton>
  );
};

export default ButtonApp;
