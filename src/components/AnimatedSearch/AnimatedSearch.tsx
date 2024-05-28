import React from 'react';
import { X, Search } from 'react-feather';
import styled, { keyframes } from 'styled-components';

const AnimatedSearch: React.FC = () => {
  const [showSearchField, setShowSearchField] = React.useState(false);

  const searchId = React.useId();

  function handleToggleSearch(
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) {
    event.preventDefault();
    setShowSearchField(!showSearchField);
  }

  return (
    <Form>
      {showSearchField && (
        <SearchFieldWrapper>
          <label htmlFor={searchId}>
            <VisuallyHidden>Search</VisuallyHidden>
          </label>
          <AnimatedInput id={searchId} />
        </SearchFieldWrapper>
      )}
      <SearchToggleButton onClick={handleToggleSearch}>
        {showSearchField ? <X /> : <Search />}
        <VisuallyHidden>Toggle search field</VisuallyHidden>
      </SearchToggleButton>
    </Form>
  );
};

export default AnimatedSearch;

const Form = styled.form`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 16px;
`;

const SearchFieldWrapper = styled.div`
  overflow: hidden;
  padding: 4px;
`;

const VisuallyHidden = styled.span`
  display: none;
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

const SearchToggleButton = styled.button`
  position: relative;
  width: 72px;
  height: 72px;
  background: hsl(260deg 20% 20%);
  border: none;
  color: white;
  display: grid;
  place-content: center;
  border-radius: 1000px;
  cursor: pointer;
`;
