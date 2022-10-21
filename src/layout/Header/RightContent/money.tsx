import React from 'react';
import { GlobalOutlined } from '@ant-design/icons';
import styles from './index.less';

interface moneyType {
  isVisible?: boolean;
  onClose?: () => any;
}

const Money: React.FC<moneyType> = () => {
  return (
    <div className={styles.money}>
      <GlobalOutlined />
      <span className={styles.num}>$1.45</span>
    </div>
  );
};
export default Money;
