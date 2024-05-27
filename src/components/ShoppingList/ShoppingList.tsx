import React from 'react';
import AddNewItemForm from './AddNewItemForm';
import styled from 'styled-components';

export type ListItem = {
  label: string;
  id: number;
};

export const App: React.FC = () => {
  const [shoppingList, setShoppingList] = React.useState<ListItem[]>([]);
  const hasItemsInList = shoppingList.length > 0;

  const handleAddItem = (label: string) => {
    const newListItem = {
      label,
      id: Math.random(),
    };

    const nextShoppingList = [...shoppingList, newListItem];
    setShoppingList(nextShoppingList);
  };

  return (
    <Wrapper>
      <ListWrapper>
        <ShoppingList>
          {!hasItemsInList && 'List is empty, try adding new items'}
          {hasItemsInList &&
            shoppingList.map((item) => <li key={item.id}>{item.label}</li>)}
        </ShoppingList>
      </ListWrapper>
      <AddNewItemForm handleAddItem={handleAddItem} />
    </Wrapper>
  );
};

export default App;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  flex: 1;
`;

const ListWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

const ShoppingList = styled.ol`
  display: flex;
  flex-direction: column;
  list-style-type: none;
  flex-grow: 1;
  gap: 8px;
  padding: 16px 24px;
  border: 1px solid grey;
  border-radius: 8px;

  background: white;
  box-shadow: 0px 1px 1.5px lightgrey;

  & > li:not(:first-of-type) {
    padding: 8px 0px 0px;
    border-top: 1px dashed grey;
  }
`;
