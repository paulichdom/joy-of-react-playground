import React, { ComponentProps } from 'react';
import styled from 'styled-components';

type SliderProps = ComponentProps<'input'> & {
  label: string;
};

const Slider: React.FC<SliderProps> = ({ label, ...delegated }) => {
  const id = React.useId();

  return (
    <Wrapper>
      <Label htmlFor={id}>{label}</Label>
      <StyledSlider type="range" id={id} {...delegated} />
    </Wrapper>
  );
};

export default Slider;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`;

const Label = styled.label`
  font-size: 1rem;
  font-weight: 500;
`;

const StyledSlider = styled.input`
  --handle-size: 16px;
  --handle-radius: 1000px;
  --track-size: 3px;
  --bg: white;
  --track-color: hsl(0deg 0% 50% / 0.25);
  --handle-color: hsl(250deg 100% 50%);
  --track-active-color: hsl(0deg 0% 50% / 0.125);
  --handle-active-color: hsl(250deg 100% 70%);

  display: block;
  width: 100%;
  background: transparent;
  appearance: none;
  outline-offset: 6px;
  cursor: pointer;

  &::-webkit-slider-thumb {
    appearance: none;
    height: var(--handle-size);
    width: var(--handle-size);
    border-radius: var(--handle-radius);
    background: var(--handle-color);
    cursor: grab;
    transform: translateY(calc(-50% + var(--track-size) / 2));
    outline: 2px solid var(--bg);
  }

  &::-moz-range-thumb {
    background: var(--handle-color);
    border: 2px solid var(--bg);
    border-radius: var(--handle-radius);
    height: var(--handle-size);
    width: var(--handle-size);
    cursor: grab;
  }

  &:active::-webkit-slider-thumb,
  &:active::-moz-range-thumb {
    cursor: grabbing;
    background: var(--handle-active-color);
  }

  &::-webkit-slider-runnable-track {
    width: calc(100% - var(--handle-size));
    height: var(--track-size);
    background: var(--track-color);
    border-radius: calc(var(--track-size) / 2);
    margin: calc(var(--handle-size) / 2) 0;
  }

  &::-moz-range-track {
    background: var(--track-color);
    height: var(--track-size);
    border-radius: calc(var(--track-size) / 2);
  }

  &:active::-webkit-slider-runnable-track,
  &:active::-moz-range-track {
    background: var(--track-active-color);
  }
`;
