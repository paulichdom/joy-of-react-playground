import useSWR from 'swr';
import { fetcher } from '../../utils';

type User = {
  name: string;
  email: string;
};

type Data = {
  ok: boolean;
  user: User;
};

type UseUserValue = {
  user: User | undefined;
  isLoading: boolean;
  isError: boolean;
};

export const useUser = (endpoint: string): UseUserValue => {
  const { data, error, isLoading } = useSWR<Data>(endpoint, fetcher);

  return {
    user: data?.user,
    isLoading,
    isError: error,
  };
};
