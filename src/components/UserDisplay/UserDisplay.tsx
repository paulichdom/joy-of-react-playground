import * as React from 'react';
import UserCard from './UserCard';
import styled from 'styled-components';
import Spinner from '../Spinner';
import { useUser } from './useUser';

const ENDPOINT = import.meta.env.VITE_GET_CURRENT_USER;

const UserDisplay: React.FC = () => {
  const { user, isLoading, isError } = useUser(ENDPOINT);
  return (
    <Wrapper>
      {isLoading && <Spinner size={32} />}
      {!isLoading && user && <UserCard name={user.name} email={user.email} />}
      {!isLoading && isError && <p>Something went wrong ...</p>}
    </Wrapper>
  );
};

export default UserDisplay;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: hsl(260deg 80% 40%);
  padding: 12px 16px;
  width: 100%;
  height: 100%;
`;
