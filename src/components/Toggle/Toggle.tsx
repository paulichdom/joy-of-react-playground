import React, { ComponentProps } from 'react';
import styled from 'styled-components';

type ToggleProps = ComponentProps<'button'> & {
  label: string;
  checked: boolean;
  handleToggle: (checked: boolean) => void;
  backdropColor?: string;
  size?: number;
};

const Toggle: React.FC<ToggleProps> = ({
  label,
  checked,
  handleToggle,
  backdropColor = 'white',
  size = 16,
}) => {
  const id = React.useId();

  const padding = size * 0.1;
  const width = size * 2 + padding * 2;

  const ballTransform = checked ? `translateX(100%)` : `translateX(0%)`;

  return (
    <Wrapper>
      <Label htmlFor={id}>{label}</Label>
      <ToggleButton
        id={id}
        type="button"
        aria-pressed={checked}
        onClick={() => {
          handleToggle(!checked);
        }}
        width={width + 'px'}
        $padding={padding}
        radius={size * 0.25 + 'px'}
        checked={checked}
      >
        <Ball
          size={size}
          transform={ballTransform}
          $background={backdropColor}
          checked={checked}
        />
      </ToggleButton>
    </Wrapper>
  );
};

export default Toggle;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const Label = styled.label`
  
`;

type ToggleStyle = {
  width: string;
  $padding: number;
  radius: string;
  checked: boolean;
};

const ToggleButton = styled.button<ToggleStyle>`
  border: none;
  background: transparent;
  cursor: pointer;
  position: relative;

  width: ${({ width }) => `${width}`};
  padding: ${({ $padding }) => `${$padding}px`};

  &::before {
    content: '';
    position: absolute;
    z-index: 0;
    top: -8px;
    left: -8px;
    right: -8px;
    bottom: -8px;
  }

  &::after {
    content: '';
    position: absolute;
    z-index: 1;
    top: 0;
    left: ${({ radius }) => radius};
    right: ${({ radius }) => radius};
    bottom: 0;
    margin: auto;
    height: 2px;
    background: black;
    border-radius: 10px;
  }

  &:focus-visible {
    outline: 2px auto hsl(345deg 100% 50%);
    outline-offset: 2px;
  }
`;

type BallStyle = {
  size: number;
  transform: string;
  $background: string;
  checked: boolean;
};

const Ball = styled.span<BallStyle>`
  display: block;
  position: relative;
  z-index: 2;
  border-radius: 50%;
  background: ${({ $background }) => `${$background === 'green' ? 'hsl(140deg 100% 70%)' : 'white'}`};
  border: 2px solid ${({ $background }) => `${$background === 'green' ? 'hsl(140deg 100% 70%)' : 'white'}`};
  outline: 2px solid black;

  width: ${({ size }) => `${size}px`};
  height: ${({ size }) => `${size}px`};
  transform: ${({ transform }) => `${transform}`};
  transition: transform 400ms cubic-bezier(.1,.78,.38,1.06);
`;
