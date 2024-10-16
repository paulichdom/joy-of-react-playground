import React from 'react';
import styles from './PriceDisplay.module.css';

const PriceDisplay: React.FC<{ price: number, id: string }> = ({ price, id }) => {
  const formattedPrice = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(price);

  return (
    <div className={styles.wrapper}>
      <div key={id} className={styles.animated}>{formattedPrice}</div>
    </div>
  );
};

export default PriceDisplay;
