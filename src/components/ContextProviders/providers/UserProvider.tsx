import React from 'react';
import useSWR from 'swr';

export type UserContextValue = {
  user: {
    email: string;
  };
  logOut: () => void;
  editProfile: (newData: { email: string }) => void;
};

const initialValue = {
  user: {
    email: '',
  },
  logOut: () => {},
  editProfile: (newData = { email: '' }) => {
    return newData;
  },
};

export const UserContext = React.createContext<UserContextValue>(initialValue);

const ENDPOINT = 'https://jor-test-api.vercel.app/api/get-current-user';

async function fetcher(endpoint: string) {
  const response = await fetch(endpoint);
  const json = await response.json();

  if (!json.ok) {
    throw json;
  }

  return json.user;
}

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { data: user, mutate: mutateUser } = useSWR(ENDPOINT, fetcher);

  const logOut = React.useCallback(() => {
    mutateUser({
      user: null,
    });
  }, [mutateUser]);

  const editProfile = React.useCallback(
    (newData: { email: string }) => {
      mutateUser({
        user: {
          ...user,
          ...newData,
        },
      });
    },
    [user, mutateUser]
  );

  return (
    <UserContext.Provider value={{ user, logOut, editProfile }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = (): UserContextValue => {
  return React.useContext(UserContext);
}
