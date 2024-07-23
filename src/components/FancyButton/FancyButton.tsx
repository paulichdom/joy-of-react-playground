import * as React from 'react';
import styled from 'styled-components';

type FancyButtonProps = React.ComponentProps<'button'>;

const FancyButton: React.FC<FancyButtonProps> = React.forwardRef(
  ({ children, ...delegated }, ref) => {
    return (
      <Button ref={ref} {...delegated}>
        {children}
      </Button>
    );
  }
);

export default FancyButton;

const Button = styled.button`
  padding: 16px 24px;
  border: none;
  color: white;
  border-radius: 16px;
  font-size: 1.125rem;
  font-weight: 500;
  filter: saturate(50%) brightness(125%) hue-rotate(-20deg);
  background: conic-gradient(
    from 90deg at 50% 100%,
    hsl(270deg 50% 30%) 50%,
    hsl(270deg 100% 50%) 75%,
    hsl(270deg 50% 30%) 100%
  );
  will-change: transform;
  transition: filter 250ms;
  border: 3px solid white;
  box-shadow: 0px 1px 2px hsl(0deg 0% 0% / 0.05),
    0px 2px 4px hsl(0deg 0% 0% / 0.05), 0px 4px 8px hsl(0deg 0% 0% / 0.05),
    0px 8px 16px hsl(0deg 0% 0% / 0.05), 0px 16px 32px hsl(0deg 0% 0% / 0.05);

  &:hover,
  &:focus {
    filter: saturate(100%) brightness(100%) hue-rotate(0deg);
  }
`;
