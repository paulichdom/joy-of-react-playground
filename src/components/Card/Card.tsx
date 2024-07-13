import * as React from 'react';
import styled from 'styled-components';

type CardProps = {
  children: React.ReactNode;
};

const Card: React.FC<CardProps> = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default Card;

const Wrapper = styled.div`
  background: white;
  padding: 16px;
  border-radius: 8px;
  /*
    This CSS variable is defined in the
    “styles.css” file.
  */
  box-shadow: var(--elevation-1);
`;
