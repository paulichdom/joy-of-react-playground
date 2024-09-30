import * as React from 'react';
import { Menu } from 'react-feather';
import styled from 'styled-components';
import { useToggle } from '../../hooks/use-toggle';

const Header: React.FC = () => {
  const [isMenuOpen, toggleIsMenuOpen] = useToggle(false);
  return (
    <header>
      <a href="">Kaboom</a>
      <div>
        <HamburgerButton onClick={() => toggleIsMenuOpen()}>
          <Menu />
        </HamburgerButton>
        {isMenuOpen && (
          <NavigationList>
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">Gallery</a>
            </li>
            <li>
              <a href="">Photographers</a>
            </li>
            <li>
              <a href="">Submit Work</a>
            </li>
          </NavigationList>
        )}
      </div>
    </header>
  );
};

export default Header;

const HamburgerButton = styled.button`
  background: transparent;
  border: none;
  padding: 0;
  margin: 0;
  width: 32px;
  height: 32px;
  display: grid;
  place-content: center;
  cursor: pointer;
  transition: transform 200ms;

  &:hover {
    transform: scale(1.1);
  }
`;

const NavigationList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 24px;
  list-style-type: none;
  padding: 0;

  & a {
    text-decoration: none;
    color: inherit;
    font-size: 1rem;

    &:hover {
      color: hsl(350deg 100% 40%);
    }
  }
`;
