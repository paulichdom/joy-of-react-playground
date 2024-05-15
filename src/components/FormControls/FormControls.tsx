import * as React from 'react';
import { FormEvent, useState } from 'react';
import styled from 'styled-components';

const FormControls: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState('red');
  const [value, setValue] = useState('no');
  const handleSubmit = (event: FormEvent) => {
    event?.preventDefault();
  };
  return (
    <Form onSubmit={handleSubmit}>
      <h2>Form Controls</h2>

      <label htmlFor="textarea">Text area</label>
      <textarea name="textarea-tag" id="textarea"></textarea>

      <label htmlFor="select">Select</label>
      <fieldset>
        <legend>Choose an option</legend>
        <select
          name="select-tag"
          id="select"
          value={selectedOption}
          onChange={(event) => setSelectedOption(event.target.value)}
        >
          <option value="red">Red</option>
          <option value="green">Green</option>
          <option value="blue">Blue</option>
        </select>
      </fieldset>
      <p>
        Selected value:
        <br />
        {selectedOption}
      </p>
      <hr />

      <label htmlFor="radio-buttons">Radio buttons</label>
      <fieldset id="radio-buttons">
        <legend>Do you agree?</legend>
        <input
          type="radio"
          name="agreed-to-terms"
          id="agreed-yes"
          value="yes"
          checked={value === 'yes'}
          onChange={(event) => setValue(event.target.value)}
        />{' '}
        <label htmlFor="agreed-yes">Yes</label>
        <br />
        <input
          type="radio"
          name="agreed-to-terms"
          id="agreed-no"
          value="no"
          checked={value === 'no'}
          onChange={(event) => setValue(event.target.value)}
        />{' '}
        <label htmlFor="agreed-no">No</label>
      </fieldset>
    </Form>
  );
};

export default FormControls;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 12px;
  border: 1px solid grey;
  border-radius: 4px;
`;
