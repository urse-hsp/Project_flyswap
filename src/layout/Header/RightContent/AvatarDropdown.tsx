import { useIntl } from '@umijs/max';
import { outLogin } from '@/services/ant-design-pro/api';
import {
  LogoutOutlined,
  SettingOutlined,
  // UserOutlined,
  DownOutlined,
} from '@ant-design/icons';
import { history, useModel } from '@umijs/max';
import { Avatar, Menu } from 'antd';
import type { ItemType } from 'antd/es/menu/hooks/useItems';
import { stringify } from 'querystring';
import type { MenuInfo } from 'rc-menu/lib/interface';
import React, { useCallback } from 'react';
import HeaderDropdown from '../HeaderDropdown';
import styles from './index.less';

export type GlobalHeaderRightProps = {
  menu?: boolean;
};

export const AvatarBox = (props: any) => {
  const { currentUser, icon = true } = props;
  return (
    <span className={`${styles.action} ${styles.account}`}>
      <Avatar
        size="small"
        className={styles.avatar}
        src={currentUser.avatar}
        alt="avatar"
      />
      <span className={`${styles.name} anticon ellipsis`}>
        {currentUser.name}
      </span>
      {icon && (
        <span className={styles.icon}>
          <DownOutlined style={{ fontSize: '15px' }} />
        </span>
      )}
    </span>
  );
};

const AvatarDropdown: React.FC<GlobalHeaderRightProps> = ({ menu }) => {
  /**
   * 退出登录，并且将当前的 url 保存
   */
  const loginOut = async () => {
    await outLogin();
    const { search, pathname } = window.location;
    const urlParams = new URL(window.location.href).searchParams;
    /** 此方法会跳转到 redirect 参数所在的位置 */
    const redirect = urlParams.get('redirect');
    // Note: There may be security issues, please note
    if (window.location.pathname !== '/user/login' && !redirect) {
      history.replace({
        pathname: '/user/login',
        search: stringify({
          redirect: pathname + search,
        }),
      });
    }
  };
  // const { initialState, setInitialState } = useModel('@@initialState');
  const { setInitialState } = useModel('@@initialState');

  const onMenuClick = useCallback(
    (event: MenuInfo) => {
      const { key } = event;
      if (key === 'logout') {
        setInitialState((s) => ({ ...s, currentUser: undefined }));
        loginOut();
        return;
      }
      history.push(`/account/${key}`);
    },
    [setInitialState],
  );

  // const loading = (
  //   <span className={`${styles.action} ${styles.account}`}>
  //     <Spin
  //       size="small"
  //       style={{
  //         marginLeft: 8,
  //         marginRight: 8,
  //       }}
  //     />
  //   </span>
  // );

  // if (!initialState) {
  //   return loading;
  // }

  // const { currentUser } = initialState;
  // if (!currentUser || !currentUser.name) {
  //   return loading;
  // }
  const intl = useIntl();

  const menuItems: ItemType[] = [
    ...(menu
      ? [
          {
            key: 'center',
            // icon: <UserOutliwned />,
            label: '个人中心',
          },
          {
            key: 'settings',
            icon: <SettingOutlined />,
            label: '个人设置',
          },
          {
            type: 'divider' as const,
          },
        ]
      : []),
    {
      key: 'logout',
      icon: <LogoutOutlined />,
      label: intl.formatMessage({ id: 'signOut' }),
    },
  ];

  const menuHeaderDropdown = (
    <Menu
      className={styles.menu}
      selectedKeys={[]}
      onClick={onMenuClick}
      items={menuItems}
    />
  );

  const currentUser = {
    avatar:
      'https://img2.baidu.com/it/u=2833484760,1116678162&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1666371600&t=2750c5d017ecef75a369acb5ad70579a',
    name: 123,
  };

  return (
    <HeaderDropdown overlay={menuHeaderDropdown}>
      <div>
        <AvatarBox currentUser={currentUser} />
      </div>
    </HeaderDropdown>
  );
};

export default AvatarDropdown;
