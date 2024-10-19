import React, { ReactNode } from 'react';
import styled, { keyframes } from 'styled-components';

const FloatingText: React.FC<{ children: ReactNode }> = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default FloatingText;

const floatBy = keyframes`
  0% {
    transform: translateY(50%);
    opacity: 0;
  }
  80% {
    opacity: 1;
  }
  100% {
    transform: translateY(-50%);
    opacity: 0;
  }
`;

const Wrapper = styled.div`
  animation: ${floatBy} 600ms both cubic-bezier(0, 0.66, 0.48, 1);
`;
