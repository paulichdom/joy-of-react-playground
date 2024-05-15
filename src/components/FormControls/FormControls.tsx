import * as React from 'react';
import { FormEvent, useState } from 'react';
import styled from 'styled-components';
import { COUNTRIES } from './data';

type CountryValues = keyof typeof COUNTRIES;
type CountryNames = (typeof COUNTRIES)[CountryValues];

const FormControls: React.FC = () => {
  const [country, setCountry] = useState<CountryNames | ''>('');
  const [selectedOption, setSelectedOption] = useState('red');
  const [value, setValue] = useState('no');
  const handleSubmit = (event: FormEvent) => {
    event?.preventDefault();
  };

  const countryList = Object.entries(COUNTRIES).map((country) => {
    return {
      value: country[0],
      name: country[1],
    };
  });

  console.log({ COUNTRIES, countryList });
  return (
    <Form onSubmit={handleSubmit}>
      <h2>Form Controls</h2>

      <label htmlFor="textarea">Text area</label>
      <textarea name="textarea-tag" id="textarea"></textarea>

      <label htmlFor="select">Select</label>
      <StyledFieldset>
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
      </StyledFieldset>
      <ValueDisplay>Selected value: {selectedOption}</ValueDisplay>

      <label htmlFor="radio-buttons">Radio buttons</label>
      <StyledFieldset id="radio-buttons">
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
      </StyledFieldset>

      <StyledFieldset>
        <legend>Shipping info</legend>
        <label htmlFor="country">Country</label>
        <br />
        <Select
          name="country"
          id="country"
          onChange={(event) => {
            setCountry(COUNTRIES[event.target.value as CountryValues]);
          }}
        >
          <option value={country}>-- Select a country --</option>
          <optgroup label="Country">
            {countryList.map((country, index) => (
              <option value={country.value} key={index}>
                {country.name}
              </option>
            ))}
          </optgroup>
        </Select>
      </StyledFieldset>
      <ValueDisplay>Selected country: {country}</ValueDisplay>
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

const StyledFieldset = styled.fieldset`
  border-radius: 4px;
`;

const Select = styled.select`
  width: 100%;
  height: 2.5rem;
  background-color: white;
  border: 1px solid black;
  border-radius: 2px;
  padding: 0px 6px;
`;

const ValueDisplay = styled.p`
  border-radius: 4px;
  padding: 16px 24px;
  background-color: rgba(238, 238, 124, 0.686);
`;
