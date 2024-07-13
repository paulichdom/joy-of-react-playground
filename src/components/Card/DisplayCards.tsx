import React from 'react';
import styled from 'styled-components';
import UserProfileCard from './UserProfileCard';
import ProductInfoCard from './ProductInfoCard';

const DisplayCards: React.FC = () => {
  return (
    <Wrapper>
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
