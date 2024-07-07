import * as React from 'react';
import Cart from './Cart';
import items from './items';

const ShoppingCart: React.FC = () => {
  return <Cart items={items} />;
};

export default ShoppingCart;
