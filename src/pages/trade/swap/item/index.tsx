import React from 'react';
import styles from './index.less';

interface item {
  isVisible?: boolean;
  onClose?: () => any;
}

const Item: React.FC<item> = () => {
  return <div className={styles.item}>TradeSwap</div>;
};
export default Item;
