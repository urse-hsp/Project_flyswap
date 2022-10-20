import { SettingOutlined, GlobalOutlined } from '@ant-design/icons';
import { SelectLang, useModel } from '@umijs/max';
import { Space } from 'antd';
import React from 'react';
import Money from './money';
import styles from './index.less';

export type SiderTheme = 'light' | 'dark';

const GlobalHeaderRight: React.FC = () => {
  const { initialState } = useModel('@@initialState');

  if (!initialState || !initialState.settings) {
    return null;
  }

  const { navTheme, layout } = initialState.settings;
  let className = styles.right;

  if ((navTheme === 'realDark' && layout === 'top') || layout === 'mix') {
    className = `${styles.right}  ${styles.dark}`;
  }
  return (
    <Space className={className}>
      {/* <Avatar /> */}
      <Money />
      <SelectLang
        className={styles.action}
        style={{ color: 'var(--ant-primary-color)', display: 'flex' }}
        icon={<GlobalOutlined />}
      />
      <SettingOutlined
        style={{
          fontSize: '19px',
          color: 'var(--ant-primary-color)',
          display: 'flex',
        }}
      />
      <div className={styles.wallet}>Connect Wallet</div>
    </Space>
  );
};
export default GlobalHeaderRight;
