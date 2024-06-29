import * as React from 'react';
import { Loader } from 'react-feather';
import VisuallyHidden from '../VisuallyHidden';
import styled, { keyframes } from 'styled-components';

type SpinnerProps = {
  size: number;
};

const Spinner: React.FC<SpinnerProps> = ({ size }) => {
  return (
    <LoadingSpinner>
      <Loader size={size} />
      <VisuallyHidden>Loading…</VisuallyHidden>
    </LoadingSpinner>
  );
};

export default Spinner;

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const LoadingSpinner = styled.span`
  display: block;
  width: max-content;
  margin: auto;
  color: white;
  animation: ${spin} 1000ms linear infinite;

  & > svg {
    display: block;
  }
`;
