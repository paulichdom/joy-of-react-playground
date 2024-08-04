import React from 'react';
import styled from 'styled-components';
import { FavouriteColorContext } from './ContextMvp';

const Sidebar: React.FC = () => {
  const id = React.useId();
  const { favouriteColor, setFavouriteColor } = React.useContext(
    FavouriteColorContext
  );
  return (
    <Aside style={{ backgroundColor: favouriteColor }}>
      <Logo href="/">Logo Here</Logo>
      <nav>
        <OrderedList>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">Gallery</a>
          </li>
          <li>
            <a href="/">Other Stuff</a>
          </li>
          <li>
            <a href="/">Contact</a>
          </li>
        </OrderedList>
      </nav>
      <label htmlFor={id}>Select Color:</label>
      <input
        id={id}
        type="color"
        value={favouriteColor}
        onChange={(event) => {
          setFavouriteColor(event.target.value);
        }}
      />
    </Aside>
  );
};

export default Sidebar;

const Aside = styled.aside`
  display: flex;
  flex-direction: column;
  width: 200px;
  padding: 8px;

  & a {
    display: block;
    padding: 16px;
    color: inherit;
    text-decoration: none;
  }

  & label {
    display: block;
    margin-top: auto;
    align-self: center;
    margin-bottom: 8px;
  }

  & input {
    align-self: center;
    margin-bottom: 16px;
  }
`;

const Logo = styled.a`
  margin-bottom: 16px;
  font-size: 1.25rem;
  font-weight: 500;
  font-style: italic;
  text-align: center;
`;

const OrderedList = styled.ol`
  list-style-type: none;
  padding: 0;

  & > li:not(:last-child) {
    border-bottom: 2px dotted hsl(0deg 0% 0% / 0.25);
  }
`;
