import * as React from 'react';
import { FormEvent, useState } from 'react';
import styled from 'styled-components';
import { COUNTRIES } from './data';
import CountryPicker from './CountryPicker';

export type CountryCode = keyof typeof COUNTRIES;
export type CountryName = (typeof COUNTRIES)[CountryCode];

export type Country = {
  value: CountryCode;
  name: CountryName;
};

const FormControls: React.FC = () => {
  const [countryCode, setCountryCode] = useState<string>('HR');

  const handleSubmit = (event: FormEvent) => {
    event?.preventDefault();
  };

  const countries: Country[] = Object.entries(COUNTRIES).map((country) => {
    return {
      value: country[0] as CountryCode,
      name: country[1],
    };
  });

  return (
    <Form onSubmit={handleSubmit}>
      <h2>Form Controls</h2>
      <CountryPicker
        countires={countries}
        countryCode={countryCode}
        setCountryCode={setCountryCode}
      />
      <button type="submit">SUBMIT</button>
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
