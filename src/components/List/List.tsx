import React, { ComponentProps, ReactNode } from 'react';
import styles from './List.module.css';

type ListProps = {
  className: string;
  children: ReactNode;
  delegated: ComponentProps<'ul' | 'ol'>;
};

const List: React.FC<ListProps> = ({
  className = '',
  children,
  ...delegated
}) => {
  return (
    <ul {...delegated} className={`${styles.wrapper} ${className}`}>
      {children}
    </ul>
  );
};

export default List;
