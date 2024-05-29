import React from 'react'
import styled, { keyframes } from 'styled-components';
import { VisuallyHidden } from './AnimatedSearch';

const SearchInput: React.FC = () => {
  const searchId = React.useId();
  return (
    <SearchFieldWrapper>
    <label htmlFor={searchId}>
      <VisuallyHidden>Search</VisuallyHidden>
    </label>
    <AnimatedInput id={searchId} />
  </SearchFieldWrapper>
  )
}

export default SearchInput;

const SearchFieldWrapper = styled.div`
  overflow: hidden;
  padding: 4px;
`;

const slideIn = keyframes`
  0% {
    transform: translateX(100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`;

const AnimatedInput = styled.input`
  display: block;
  padding: 4px 16px;
  border: none;
  border-bottom: 3px solid hsl(260deg 20% 20%);
  border-radius: 3px;
  font-size: 1.25rem;
  outline-offset: 2px;
  animation: ${slideIn} 1000ms cubic-bezier(0.15, 0.85, 0.47, 1.02);
`;