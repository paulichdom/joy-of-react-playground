import React from 'react';
import SearchResult from './SearchResult';
import { Book } from './BookSearch';
import styled from 'styled-components';

type SearchResultListProps = {
  searchResults: Book[];
};

export const SearchResultList: React.FC<SearchResultListProps> = ({
  searchResults,
}) => {
  if (searchResults.length === 0) return <h3>No results found</h3>;
  return (
    <SearchResults>
      <SeactionTitle>Search Results:</SeactionTitle>
      {searchResults.map((result) => (
        <SearchResult key={result.isbn} result={result} />
      ))}
    </SearchResults>
  );
};

const SearchResults = styled.div`
  display: flex;
  flex-direction: column;
  padding: 32px;
  gap: 32px;
  max-width: 35rem;
`;

const SeactionTitle = styled.h2`
  display: block;
  font-size: 1.5em;
  margin-block-start: 0.83em;
  margin-block-end: 0.83em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-weight: bold;
  unicode-bidi: isolate;
  overflow-wrap: break-word;
`;
