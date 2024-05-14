import * as React from 'react';
import { FormEvent } from 'react';
import styled from 'styled-components';

const Form: React.FC = () => {
  const [name, setName] = React.useState('');
  // Use FormData
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    const formData = new FormData(event.target as HTMLFormElement);
    const { username } = Object.fromEntries(formData);

    console.log({ formData, username });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name-filed">Name</label>
      <input
        type="text"
        id="name-filed"
        value={name}
        onChange={(event) => {
          setName(event.target.value);
        }}
      />
      <ValueContainer>
        <strong>Current value:</strong>
        {name || '(empty)'}
      </ValueContainer>
    </form>
  );
};

export default Form;

const ValueContainer = styled.p`
  display: flex;
  flex-direction: column;
`;
