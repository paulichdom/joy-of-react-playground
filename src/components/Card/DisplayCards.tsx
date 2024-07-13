import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import UserProfileCard from './UserProfileCard';
import ProductInfoCard from './ProductInfoCard';

const GlobalStyles = createGlobalStyle`
  html {
  /*
    These CSS variables establish different
    values to be used with the “box-shadow”
    property, to simulate elements being
    at different elevation levels.
  */
  --elevation-1:
    0px 0.5px 1px hsl(0deg 0% 0% / 0.2),
    0px 1px 2px hsl(0deg 0% 0% / 0.15),
    0px 2px 4px hsl(0deg 0% 0% / 0.1);
  --elevation-2:
    0px 1px 2px hsl(0deg 0% 0% / 0.2),
    0px 2px 4px hsl(0deg 0% 0% / 0.15),
    0px 4px 8px hsl(0deg 0% 0% / 0.15),
    0px 8px 16px hsl(0deg 0% 0% / 0.1);
  --elevation-3:
    0px 1px 2px hsl(0deg 0% 0% / 0.15),
    0px 2px 4px hsl(0deg 0% 0% / 0.15),
    0px 4px 8px hsl(0deg 0% 0% / 0.125),
    0px 8px 16px hsl(0deg 0% 0% / 0.125),
    0px 16px 32px hsl(0deg 0% 0% / 0.1),
    0px 32px 64px hsl(0deg 0% 0% / 0.1);
  }
`;

const DisplayCards: React.FC = () => {
  return (
    <Wrapper>
      <GlobalStyles />
      <UserProfileCard />
      <ProductInfoCard />
    </Wrapper>
  );
};

export default DisplayCards;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding: 64px 32px;
  background: hsl(270deg 100% 80%);
`;
