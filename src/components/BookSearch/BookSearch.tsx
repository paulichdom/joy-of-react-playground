import React from 'react';
import SearchResult from './SearchResult';
import TextInput from './TextInput';
import styled from 'styled-components';

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
  const [searchTerm, setSearchTerm] = React.useState('');
  // const [searchResults, setSearchResults] = React.useState(null);

  const handleSubmitForm = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!searchTerm) return;

    const searchParams = new URLSearchParams();
    searchParams.append('searchTerm', searchTerm);

    const response = await fetch(`${ENDPOINT}?${searchParams}`);
    const result = await response.json();
    console.log({ result });
  };

  return (
    <>
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

      <main>
        <SearchResults>
          <SeactionTitle>Search Results:</SeactionTitle>
          {/*
            Here's an example of the element
            we want to render:
          */}
          <SearchResult result={EXAMPLE} />
        </SearchResults>
      </main>
    </>
  );
}

const EXAMPLE = {
  isbn: '9781473621442',
  name: 'A Closed and Common Orbit',
  author: 'Becky Chambers',
  coverSrc:
    'https://sandpack-bundler.vercel.app/img/book-covers/common-orbit.jpg',
  abstract:
    "Lovelace was once merely a ship's artificial intelligence. When she wakes up in an new body, following a total system shut-down and reboot, she has no memory of what came before. As Lovelace learns to negotiate the universe and discover who she is, she makes friends with Pepper, an excitable engineer, who's determined to help her learn and grow.",
};

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

const SearchResults = styled.div`
  display: flex;
  flex-direction: column;
  padding: 32px;
  gap: 32px;
  margin: 32px auto;
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
