import React from 'react';

import Sidebar from './Sidebar';
import styled from 'styled-components';

const Home: React.FC = () => {
  return (
    <Container>
      <Sidebar />
      <Main>
        <Title>This is a placeholder for a corporate slogan</Title>
        <p>This almost looks like a real website!</p>
      </Main>
    </Container>
  );
};

export default Home;

const Container = styled.div`
  display: flex;
  min-height: 100%;
`;

const Main = styled.main`
  flex: 1;
  padding: 32px;
`;

const Title = styled.h1`
  font-size: 1.5rem;
  margin-bottom: 32px;
  overflow-wrap: break-word;
`;
