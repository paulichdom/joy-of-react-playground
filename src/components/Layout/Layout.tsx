import React, { ReactNode } from "react";
import styled from "styled-components";
import { ComponentSelector } from "../ComponentSelector";
import { ComponentKey } from "..";

type LayoutProps = {
  selectedComponent: ComponentKey;
  setSelectedComponent: React.Dispatch<React.SetStateAction<ComponentKey>>;
  children: ReactNode;
};

// Footer is commented out temp to gain more real estate and ease of use
const Layout: React.FC<LayoutProps> = ({
  children,
  selectedComponent,
  setSelectedComponent,
}) => {
  return (
    <Container>
      <Header>
        <h1>Sandbox</h1>
        <ComponentSelector
          selectedComponent={selectedComponent}
          setSelectedComponent={setSelectedComponent}
        />
      </Header>
      <Main>{children}</Main>
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
    "header header header"
    ". main .";
  /* 'footer footer footer'; */
  min-height: 100%;
`;

const Header = styled.header`
  grid-area: header;
  display: flex;
  justify-content: space-around;
  color: black;
  background-color: white;
  border-bottom: 1px solid gray;
  padding: 8px;
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
