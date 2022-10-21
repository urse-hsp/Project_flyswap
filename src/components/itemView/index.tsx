import React from 'react';
import { Card } from 'antd';
import styles from './index.less';

interface itemView {
  isVisible?: boolean;
  onClose?: () => any;
  children: any;
  params?: any;
}

const ItemView: React.FC<itemView> = (props) => {
  return (
    <Card
      className={styles.itemView}
      loading={false}
      bodyStyle={{ padding: 0 }}
      {...props.params}
    >
      {props.children}
    </Card>
  );
};
export default ItemView;
