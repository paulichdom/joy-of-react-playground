import React from 'react';
import { X, Search } from 'react-feather';
import styled from 'styled-components';
import SearchInput from './SearchInput';

const AnimatedSearch: React.FC = () => {
  const [showSearchField, setShowSearchField] = React.useState(false);

  function handleToggleSearch(
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) {
    event.preventDefault();
    setShowSearchField(!showSearchField);
  }

  return (
    <Form>
      {showSearchField && <SearchInput />}
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

export const VisuallyHidden = styled.span`
  display: none;
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
