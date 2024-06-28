import React, { Fragment, useState } from 'react';
import SearchResult from './SearchResult';
import TextInput from './TextInput';
import styled from 'styled-components';
import { SearchResultList } from './SearchResultList';

/*
  API INSTRUCTIONS
  
  This endpoint expects a GET request,
  with a query parameter of `searchTerm`.
  Eg. `/api/book-search?searchTerm=winter`
  
  To simulate an error, attach the following
  query parameter: `simulatedError=true`
  
  To test the results, here are some suggested
  search terms:
  
    • `fifth` — 1 result
    • `a` — 18 results
    • `becky` — 4 results
    • `hello` — 0 results
*/

const ENDPOINT = import.meta.env.VITE_BOOK_SEARCH_ENDPOINT;

type NetworkStatus = 'idle' | 'loading' | 'success' | 'error';

export type Book = {
  isbn: string;
  name: string;
  author: string;
  coverSrc: string;
  abstract: string;
};

export type SearchResult = {
  ok: boolean;
  results: Book[];
};

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState<Book[]>([]);
  const [status, setStatus] = useState<NetworkStatus>('idle');

  const handleSubmitForm = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!searchTerm) return;
    setStatus('loading');

    const searchParams = new URLSearchParams();
    searchParams.append('searchTerm', searchTerm);

    const response = await fetch(`${ENDPOINT}?${searchParams}`);
    const json = await response.json();

    if (json.ok) {
      setSearchResults(json.results);
      setStatus('success');
    } else {
      setStatus('error');
    }
  };

  return (
    <Fragment>
      <Header>
        <Form onSubmit={handleSubmitForm}>
          <TextInput
            required={true}
            label="Search"
            placeholder="The Fifth Season"
            value={searchTerm}
            onChange={(event) => {
              setSearchTerm(event.target.value);
            }}
          />
          <Button>Go!</Button>
        </Form>
      </Header>
      <Main>
        {status === 'idle' && <h2>Welcome to Book Search!</h2>}
        {status === 'loading' && <h3>Searching ...</h3>}
        {status === 'success' && (
          <SearchResultList searchResults={searchResults} />
        )}
        {status === 'error' && <h3>An error occured</h3>}
      </Main>
    </Fragment>
  );
}

export default App;

const Header = styled.header`
  padding: 16px;
  border-bottom: 2px solid #333;
  background: hsl(345deg 100% 90%);
`;

const Form = styled.form`
  display: flex;
  gap: 0px;
  justify-content: flex-end;
  align-items: center;
`;

const Button = styled.button`
  height: 2.75rem;
  border: 2px solid #333;
  border-radius: 0px 4px 4px 0px;
  padding: 0px 24px;
  background: white;
`;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 32px;
`;
