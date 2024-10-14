import React from 'react';
import Asterisk from './Asterisk';

const AsteriskDemo: React.FC = () => {
  return (
    <p>
      This paragraph has some additional context
      <Asterisk>I’m the additional context!</Asterisk> held in an asterisk
    </p>
  );
};

export default AsteriskDemo;
