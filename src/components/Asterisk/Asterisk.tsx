import React from 'react';
import * as Tooltip from '@radix-ui/react-tooltip';

import styles from './Asterisk.module.css';

const Asterisk: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <Tooltip.Root>
      <Tooltip.Trigger className={styles.trigger}>*</Tooltip.Trigger>
      <Tooltip.Portal>
        <Tooltip.Content className={styles.content}>
          {children}
          <Tooltip.Arrow />
        </Tooltip.Content>
      </Tooltip.Portal>
    </Tooltip.Root>
  );
};

export default Asterisk;
