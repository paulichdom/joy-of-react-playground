import React, { Dispatch, SetStateAction } from 'react';

type PlaybackRateContextValue = {
  playbackRate: number;
  setPlaybackRate: Dispatch<SetStateAction<number>>;
  resetPlaybackRate: () => void;
};

const intialState = {
  playbackRate: 1,
  setPlaybackRate: () => {},
  resetPlaybackRate: () => {},
};

export const PlaybackRateContext =
  React.createContext<PlaybackRateContextValue>(intialState);

export const PlaybackRateProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [playbackRate, setPlaybackRate] = React.useState(1);

  const resetPlaybackRate = React.useCallback(() => {
    setPlaybackRate(1);
  }, []);
  return (
    <PlaybackRateContext.Provider
      value={{
        playbackRate,
        setPlaybackRate,
        resetPlaybackRate,
      }}
    >
      {children}
    </PlaybackRateContext.Provider>
  );
};

export const usePlaybackRateContext = (): PlaybackRateContextValue => {
  return React.useContext(PlaybackRateContext);
}

