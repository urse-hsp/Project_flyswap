import React from 'react';
import Fly_logo from '@/assets/images/logo/fly_logo.png';

import styles from './index.less';

interface moneyType {
  isVisible?: boolean;
  onClose?: () => any;
}

const Money: React.FC<moneyType> = () => {
  return (
    <div className={styles.money}>
      <img src={Fly_logo} className={styles.logo} />
      $1.45
    </div>
  );
};
export default Money;
