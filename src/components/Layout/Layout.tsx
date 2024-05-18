import { ReactNode } from 'react';
import styled from 'styled-components';

type LayoutProps = {
  children: ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Container>
      <Header>
        <h1>Playground</h1>
      </Header>
      <Main>{children}</Main>
      <Footer>
        <p>2024</p>
      </Footer>
    </Container>
  );
};

export default Layout;

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr min(60ch, calc(100% - 64px)) 1fr;
  grid-column-gap: 32px;
  grid-template-rows: auto;
  grid-template-areas:
    'header header header'
    '. main .'
    'footer footer footer';
`;

const Header = styled.header`
  grid-area: header;
  display: flex;
  justify-content: center;
  padding: 16px 24px;
  background-color: rgb(117, 135, 172);
`;

const Main = styled.main`
  grid-area: main;
  padding: 32px 0px 32px;
  // TODO: Find a better soultion for adjusting the height
  height: 100vh;
`;

const Footer = styled.footer`
  grid-area: footer;
  display: flex;
  justify-content: center;
  padding: 16px 24px;
  background-color: rgb(117, 135, 172);
`;
