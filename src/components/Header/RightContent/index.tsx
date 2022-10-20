import { SettingOutlined, GlobalOutlined } from '@ant-design/icons';
import { SelectLang, useModel } from '@umijs/max';
import { Space } from 'antd';
import React from 'react';
import Money from './money';
import Avatar, { AvatarBox } from './AvatarDropdown';
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
      <Money />
      <SelectLang
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
      <AvatarBox
        currentUser={{
          avatar:
            'https://img2.baidu.com/it/u=2833484760,1116678162&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1666371600&t=2750c5d017ecef75a369acb5ad70579a',
          name: 123,
        }}
        icon={false}
      />
      <Avatar />
    </Space>
  );
};
export default GlobalHeaderRight;
