import React from 'react';
import Item from './item';
import styles from './index.less';

interface tradeSwapType {
  isVisible?: boolean;
  onClose?: () => any;
}

const TradeSwap: React.FC<tradeSwapType> = () => {
  return (
    <div className={styles.swap}>
      <Item />
    </div>
  );
};
export default TradeSwap;
