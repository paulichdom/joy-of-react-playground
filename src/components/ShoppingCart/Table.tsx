import React from 'react';
import { Item } from './items';
import styled from 'styled-components';

const Table: React.FC<{ items: Item[] }> = ({ items }) => {
  console.info('CartTable render');

  return (
    <TableBase>
      <thead>
        <tr>
          <Header></Header>
          <Header>Title</Header>
          <Header>Price</Header>
        </tr>
      </thead>
      <Body>
        {items.map(({ id, imageSrc, imageAlt, title, price }) => (
          <tr key={id} className="cart-row">
            <Cell>
              <Image src={imageSrc} alt={imageAlt} />
            </Cell>
            <Cell>{title}</Cell>
            <Cell>${price}</Cell>
          </tr>
        ))}
      </Body>
    </TableBase>
  );
};

const CartTable = React.memo(Table);

export default CartTable;

const TableBase = styled.table`
  width: 100%;
  border-collapse: collapse;

  & > tr {
    border-bottom: 1px solid hsl(0deg 0% 50%);
  }
`;

const Header = styled.th`
  text-align: left;
  border-bottom: 3px solid hsl(0deg 0% 25%);
`;

const Image = styled.img`
  display: block;
  width: 150px;
  max-width: 100%;
`;

const Cell = styled.td`
  padding: 8px 0;
`;

const Body = styled.tbody`
  & > tr:not(:last-of-type) {
    border-bottom: 1px solid hsl(0deg 0% 50%);
  }
`;
