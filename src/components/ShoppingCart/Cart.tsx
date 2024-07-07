import React from 'react';

import Table from './Table';
import { Item } from './items';
import styled from 'styled-components';

const ShoppingCart: React.FC<{ items: Item[] }> = ({ items }) => {
  const [postalCode, setPostalCode] = React.useState('');
  const postalCodeId = React.useId();

  const inStockItems = React.useMemo(
    () => items.filter((item) => item.inStock),
    [items]
  );
  const outOfStockItems = React.useMemo(
    () => items.filter((item) => !item.inStock),
    [items]
  );

  return (
    <Wrapper>
      <Title>Shopping cart</Title>
      <Form>
        <label htmlFor={postalCodeId}>
          Enter Postal / ZIP code for shipping estimate:
        </label>
        <input
          id={postalCodeId}
          type="text"
          value={postalCode}
          onChange={(event) => {
            setPostalCode(event.target.value);
          }}
        />
      </Form>
      <Table items={inStockItems} />
      <Actions>
        <button>Continue checkout</button>
      </Actions>
      <Title>Sold out</Title>
      <Table items={outOfStockItems} />
    </Wrapper>
  );
};

export default ShoppingCart;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
`;

const Title = styled.h2`
  margin: 24px 0;
`;

const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  padding: 16px 24px;
  border: 2px dashed grey;
`;

const Actions = styled.div`
  width: 100%;
  margin: 24px 0 0;
  display: flex;
  justify-content: flex-end;
`;
