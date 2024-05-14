import * as React from 'react';
import { FormEvent } from 'react';

const Form: React.FC = () => {
  // Use FormData
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    const formData = new FormData(event.target as HTMLFormElement);
    const { username } = Object.fromEntries(formData);

    console.log({ formData, username });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="username">Select a username;</label>
      <input type="text" id="username" name="username" />
    </form>
  );
};

export default Form;
