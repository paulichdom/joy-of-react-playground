import React from 'react';

export const useToggle = (initialvalue = false) => {
  const [value, setValue] = React.useState(initialvalue);

  const toggle = () => setValue(!value);

  return [value, toggle];
};
