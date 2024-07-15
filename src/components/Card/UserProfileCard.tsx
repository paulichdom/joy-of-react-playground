import React from 'react';
import Card from './Card';
import styled from 'styled-components';

type User = {
  avatarSrc: string;
  avatarDescription: string;
  name: string;
  handle: string;
};

type UserProfileCardProps = {
  user: User;
};

const UserProfileCard: React.FC<UserProfileCardProps> = ({ user }) => {
  const profileUrl = `/users/${user.handle}`;
  const imageAlt = `${user.avatarDescription} (user profile photo)`;
  return (
    <Card elevation='low'>
      <Avatar alt={imageAlt} src={user.avatarSrc} />
      <ProfileLink href={profileUrl}>{user.name}</ProfileLink>
    </Card>
  );
};

export default UserProfileCard;

const Avatar = styled.img`
  display: block;
  margin-top: -64px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 8px;
  width: 96px;
  height: 96px;
  border-radius: 50%;
  border: 3px solid white;
  background-color: hsl(270deg 100% 90%);
`;

const ProfileLink = styled.a`
  display: block;
  color: inherit;
  font-size: 1.25rem;
  font-weight: 500;
  text-align: center;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;
