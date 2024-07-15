import * as React from 'react';
import styled from 'styled-components';

type CardProps = {
  children: React.ReactNode;
  elevation: 'low' | 'medium' | 'high';
};

const Card: React.FC<CardProps> = ({ children, elevation }) => {
  return <Wrapper elevation={elevation}>{children}</Wrapper>;
};

export default Card;

const Wrapper = styled.div<{ elevation?: string }>`
  background: white;
  padding: 16px;
  border-radius: 8px;
  /*
    This CSS variable is defined in the
    “styles.css” file.
  */
  box-shadow: ${({ elevation }) => {
    switch (elevation) {
      case 'low':
        return 'var(--elevation-1)';
      case 'medium':
        return 'var(--elevation-2)';
      case 'high':
        return 'var(--elevation-3)';
      default:
        return 'none';
    }
  }};
`;
