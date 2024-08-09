import React from 'react';

import { useUserContext } from './providers/UserProvider';
import { useThemeContext } from './providers/ThemeProvider';
import { usePlaybackRateContext } from './providers/PlaybackRateProvider';

const Homepage: React.FC = () => {
  const { user } = useUserContext();
  const { theme } = useThemeContext();
  const { playbackRate } = usePlaybackRateContext();

  return (
    <>
      <p>User: {user ? user.email : 'None'}</p>
      <p>Theme: {theme}</p>
      <p>Playback Rate: {playbackRate}x</p>
    </>
  );
};

export default Homepage;
