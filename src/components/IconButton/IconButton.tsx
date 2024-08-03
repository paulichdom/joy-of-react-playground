import React from 'react';
import { Icon } from 'react-feather';
import styled from 'styled-components';

type IconButtonProps = {
  icon: Icon;
  children: React.ReactNode;
};

const IconButton: React.FC<IconButtonProps> = ({ icon: Icon, children }) => {
  return (
    <Wrapper>
      <IconWrapper>
        <Icon strokeWidth={1.5} />
      </IconWrapper>
      <ChildrenWrapper>{children}</ChildrenWrapper>
    </Wrapper>
  );
};

export default IconButton;

const Wrapper = styled.button`
  display: flex;
  align-items: center;
  padding: 4px;
  border: none;
  border-radius: 8px;
  color: white;
  background-color: hsl(270deg 40% 20%);
  font-size: 1.125rem;
  cursor: pointer;

  &:hover > :first-child {
    background-color: hsl(270deg 25% 40%);
  }
  &:active > :first-child {
    transform: scale(0.9);
  }
`;

const IconWrapper = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 40px;
  aspect-ratio: 1 / 1;
  background-color: hsl(270deg 25% 35%);
  border-radius: 4px;
  transition: background-color 200ms;
`;

const ChildrenWrapper = styled.span`
  padding: 0px 24px;
`;
