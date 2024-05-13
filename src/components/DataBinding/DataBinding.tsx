import * as React from 'react';
import styled from 'styled-components';

const DataBinding: React.FC = () => {
  const [searchTerm, setSearchTerm] = React.useState<string | number>('cats!');
  return (
    <Section>
      <Form>
        <label htmlFor="search-input">Search:</label>
        <input
          type="text"
          id="search-input"
          value={searchTerm}
          onChange={(event) => {
            setSearchTerm(event.target.value);
          }}
        />
      </Form>
      <p>Search term: {searchTerm}</p>
      <button onClick={() => setSearchTerm(Math.random())}>Click me</button>
    </Section>
  );
};

export default DataBinding;

const Section = styled.section`
  padding: 24px 0px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 8px;
  border: 1px solid black;
`;
