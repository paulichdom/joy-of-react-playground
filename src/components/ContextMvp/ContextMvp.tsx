import * as React from 'react';
import Home from './Home';

type FavouriteColorContextValue = {
  favouriteColor: string;
  setFavouriteColor: React.Dispatch<React.SetStateAction<string>>;
};

export const FavouriteColorContext =
  React.createContext<FavouriteColorContextValue>({
    favouriteColor: '#EBDEFB',
    setFavouriteColor: () => {},
  });

const ContextMvp: React.FC = () => {
  const [favouriteColor, setFavouriteColor] = React.useState('#EBDEFB');

  const value = {
    favouriteColor,
    setFavouriteColor,
  };

  return (
    <FavouriteColorContext.Provider value={value}>
      <Home />
    </FavouriteColorContext.Provider>
  );
};

export default ContextMvp;
