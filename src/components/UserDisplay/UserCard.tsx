import React from 'react';
import styled from 'styled-components';

type UserCardProps = {
  name: string;
  email: string;
};

const UserCard: React.FC<UserCardProps> = ({ name, email }) => {
  return (
    <Card>
      <Name>{name}</Name>
      <Email>{email}</Email>
    </Card>
  );
};

export default UserCard;

const Card = styled.article`
  background: white;
  color: black;
  border-radius: 16px;
  padding: 24px 48px;
  border: 2px dashed hsl(260deg 100% 80%);
  outline: 2px solid white;
  text-align: center;
  height: fit-content;
`;

const Name = styled.p`
  font-size: 1.25rem;
  font-weight: 500;
  overflow-wrap: break-word;
`;

const Email = styled.p`
  overflow-wrap: break-word;
`;
