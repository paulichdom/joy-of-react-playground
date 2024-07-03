import { ReactNode } from 'react';
import styled from 'styled-components';

type LayoutProps = {
  children: ReactNode;
};

// Footer is commented out temp to gain more realestate and ease of use
const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Container>
      <Header>
        <h1>Sandbox</h1>
      </Header>
      <Main>{children}</Main>
      {/*  <Footer>
        <p>2024</p>
      </Footer> */}
    </Container>
  );
};

export default Layout;

const Container = styled.div`
  display: grid;
  flex: 1;
  grid-template-columns: 1fr min(60ch, calc(100% - 64px)) 1fr;
  grid-column-gap: 32px;
  grid-row-gap: 32px;
  grid-template-rows: auto 1fr auto;
  grid-template-areas:
    'header header header'
    '. main .';
  /* 'footer footer footer'; */
  min-height: 100%;
`;

const Header = styled.header`
  grid-area: header;
  display: flex;
  justify-content: center;
  padding: 16px 24px;
  color: white;
  background-color: hsl(250deg 15% 25%);
`;

const Main = styled.main`
  grid-area: main;
`;

/* const Footer = styled.footer`
  grid-area: footer;
  display: flex;
  justify-content: center;
  padding: 16px 24px;
  color: white;
  background-color: hsl(250deg 15% 25%);
`; */
