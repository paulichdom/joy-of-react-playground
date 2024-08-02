import React, { ComponentPropsWithoutRef, ReactNode } from 'react';
import styled from 'styled-components';

type ListProps = {
  as?: 'ul' | 'ol';
  children: ReactNode;
} & ComponentPropsWithoutRef<'ol'> &
  ComponentPropsWithoutRef<'ul'>;

const List: React.FC<ListProps> = ({ as = 'ul', children, ...delegated }) => {
  return (
    <StyledList as={as} {...delegated}>
      {children}
    </StyledList>
  );
};

export default List;

const StyledList = styled.div`
  font-size: 1.25rem;
  padding: 0px;

  & > li {
    margin-bottom: 0.5em;
  }

  & > li::marker {
    color: hsl(345deg 100% 50%);
  }
`;
