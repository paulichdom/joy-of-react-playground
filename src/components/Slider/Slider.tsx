import React, { ComponentProps } from 'react';

type SliderProps = ComponentProps<'input'> & {
  label: string;
};

const Slider: React.FC<SliderProps> = ({
  label,
  min,
  max,
  value,
  onChange,
}) => {
  const id = React.useId();

  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input
        type="range"
        id={id}
        min={min}
        max={max}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default Slider;
