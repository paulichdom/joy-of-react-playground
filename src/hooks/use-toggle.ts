import React from 'react';

export const useToggle = (initialValue = false) => {
  if (typeof initialValue !== 'boolean') {
    console.warn('Invalid type for useToggle');
  }

  const [value, setValue] = React.useState(
    initialValue
  );

  function toggleValue() {
    setValue((currentValue) => !currentValue);
  }

  return [value, toggleValue];
}