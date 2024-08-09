import React from 'react';

import Homepage from './Homepage';
import { UserProvider } from './providers/UserProvider';
import { ThemeProvider } from './providers/ThemeProvider';
import { PlaybackRateProvider } from './providers/PlaybackRateProvider';

const ContextProviders: React.FC = () => {
  return (
    <UserProvider>
      <ThemeProvider>
        <PlaybackRateProvider>
          <Homepage />
        </PlaybackRateProvider>
      </ThemeProvider>
    </UserProvider>
  );
};

export default ContextProviders;
