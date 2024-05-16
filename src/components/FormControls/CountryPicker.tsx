import styled from 'styled-components';
import { Country, CountryCode } from './FormControls';
import { COUNTRIES } from './data';

type CountryPickerProps = {
  countires: Country[];
  countryCode: string;
  setCountryCode: (countryCode: CountryCode) => void;
};

const CountryPicker: React.FC<CountryPickerProps> = ({
  countires,
  countryCode,
  setCountryCode,
}) => {
  return (
    <>
      <StyledFieldset>
        <legend>Shipping info</legend>
        <label htmlFor="country">Country</label>
        <br />
        <Select
          required
          name="country"
          id="country"
          value={countryCode}
          onChange={(event) => {
            setCountryCode(event.target.value as CountryCode);
          }}
        >
          <option value="">-- Select a country --</option>
          <optgroup label="Country">
            {countires.map((country, index) => (
              <option value={country.value} key={index}>
                {country.name}
              </option>
            ))}
          </optgroup>
        </Select>
      </StyledFieldset>
      <ValueDisplay>
        Selected country:{' '}
        {countryCode !== ''
          ? COUNTRIES[countryCode as CountryCode]
          : 'No selection'}
      </ValueDisplay>
      <SubmitButton type="submit">SUBMIT</SubmitButton>
    </>
  );
};

export default CountryPicker;

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

const SubmitButton = styled.button`
  height: 2.5rem;
  background-color: white;
  border: 1px solid black;
  border-radius: 4px;
`;
