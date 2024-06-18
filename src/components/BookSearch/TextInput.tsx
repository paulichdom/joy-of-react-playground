import React, { ComponentProps } from 'react';

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
    <>
      <label htmlFor={appliedId}>{label}</label>
      <input id={appliedId} {...delegated} />
    </>
  );
};

export default TextInput;
