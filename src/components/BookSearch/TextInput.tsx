import React, { ComponentProps } from 'react';
import styled from 'styled-components';

// This component uses a technique known as
// “prop delegation”. We'll learn more about it
// in Module 4!
type TextInputProps = ComponentProps<'input'> & {
  id?: string;
  label: string;
};
const TextInput: React.FC<TextInputProps> = ({ id, label, ...delegated }) => {
  const generatedId = React.useId();
  const appliedId = id || generatedId;

  return (
    <Wrapper>
      <label htmlFor={appliedId}>{label}</label>
      <Input id={appliedId} {...delegated} />
    </Wrapper>
  );
};

export default TextInput;

const Wrapper = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
`;

const Input = styled.input`
  width: 12rem;
  height: 2.75rem;
  padding: 0px 12px;
  border: 2px solid #333;
  border-right: none;
  border-radius: 4px 0px 0px 4px;
`;
