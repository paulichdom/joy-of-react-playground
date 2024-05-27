import React from 'react';
import styled from 'styled-components';

type AddNewItemFormProps = {
  handleAddItem: (label: string) => void;
};

export const AddNewItemForm: React.FC<AddNewItemFormProps> = ({
  handleAddItem,
}) => {
  const [inputValue, setInputValue] = React.useState('');

  const handleFormSubmit = (event: React.FormEvent<HTMLDivElement>) => {
    event.preventDefault();
    handleAddItem(inputValue);
    setInputValue('');
  };

  return (
    <NewListItemForm onSubmit={(event) => handleFormSubmit(event)}>
      <Form>
        <Label htmlFor="new-list-form-input">New item:</Label>

        <Row>
          <input
            required={true}
            id="new-list-form-input"
            type="text"
            value={inputValue}
            onChange={(event) => setInputValue(event.target.value)}
          />
          <button type="submit">Add</button>
        </Row>
      </Form>
    </NewListItemForm>
  );
};

export default AddNewItemForm;

const NewListItemForm = styled.div`
  background: whitesmoke;
  padding: 4px;
  border-radius: 8px;
  width: 100%;
`;

const Form = styled.form`
  border: 2px dashed grey;
  border-radius: 4px;
  padding: 16px;
  text-align: center;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 16px;
  font-size: 1.125rem;
  font-weight: 500;
`;

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;

  & > input {
    flex: 4;
    min-width: 220px;
    height: 2.5rem;
    font-size: 1.125rem;
  }

  & > button {
    flex: 1;
    min-width: 90px;
    height: 2.5rem;
    font-size: 1.125rem;
    box-shadow: none;
    background-color: smoke;
    border: 1px solid black;
    border-radius: 2px;
  }
`;
