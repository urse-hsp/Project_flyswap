// 运行时配置文件
import React, { useState } from 'react';
import Footer from '@/components/Footer';
// import HeaderView from '@/components/Header';

import TabNavigation from '@/components/Header/tabNavigation';

import RightContent from '@/components/Header/RightContent';
import type { Settings as LayoutSettings } from '@ant-design/pro-components';
// import { PageContainer, DefaultHeader } from '@ant-design/pro-components';

import { SettingDrawer } from '@ant-design/pro-components';
import type { RunTimeLayoutConfig } from '@umijs/max';
import defaultSettings from '../config/defaultSettings';
import { errorConfig } from './utils/requestErrorConfig';
import { currentUser as queryCurrentUser } from './services/ant-design-pro/api';
// import { history } from '@umijs/max';
import routesList from '../config/routes';
// import { getMenuData } from '@ant-design/pro-components';

// const isDev = process.env.NODE_ENV === 'development';
const loginPath = '/user/login';

/**
 * @see  https://umijs.org/zh-CN/plugins/plugin-initial-state
 * */
export async function getInitialState(): Promise<{
  settings?: Partial<LayoutSettings>;
  currentUser?: API.CurrentUser;
  loading?: boolean;
  fetchUserInfo?: () => Promise<API.CurrentUser | undefined>;
}> {
  const fetchUserInfo = async () => {
    try {
      const msg = await queryCurrentUser({
        skipErrorHandler: true,
      });
      return msg.data;
    } catch (error) {
      // history.push(loginPath);
    }
    return undefined;
  };
  // 如果不是登录页面，执行
  if (window.location.pathname !== loginPath) {
    console.log('执行');
    const currentUser = await fetchUserInfo();
    return {
      fetchUserInfo,
      currentUser,
      settings: defaultSettings,
    };
  }
  return {
    fetchUserInfo,
    settings: defaultSettings,
  };
}

// ProLayout 支持的api https://procomponents.ant.design/components/layout
export const layout: RunTimeLayoutConfig = ({
  initialState,
  setInitialState,
}) => {
  // const match = useRouteData();
  // console.log(match);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [routeData, setRouteData] = useState<any[]>([]);
  return {
    rightContentRender: () => <RightContent />,
    waterMarkProps: {
      content: initialState?.currentUser?.name,
    },
    footerRender: () => <Footer />,
    onPageChange: ({ pathname }) => {
      const forRoute = () => {
        for (let i = 0; i < routesList.length; i++) {
          const list: any = routesList[i]?.routes;
          if (list) {
            for (let j = 0; j < list.length; j++) {
              console.log(666);
              if (pathname === list[j].path) {
                console.log(routesList[i].routes);
                setRouteData(routesList[i].routes);
                // this.$message(‘名字重复了！')
                break;
              }
            }
          }
        }
      };
      forRoute();
      // console.log(pathname, 777, history, routesList);

      // const { location } = history;
      // 如果没有登录，重定向到 login
      // if (!initialState?.currentUser && location.pathname !== loginPath) {
      //   history.push(loginPath);
      // }
    },
    pageTitleRender: false,
    hideInMenu: false,
    token: {
      header: {
        colorBgHeader: '#FFFFFF',
        colorTextMenu: '#4B9F94',
        colorTextMenuSecondary: 'red',
        colorTextMenuSelected: '#4B9F94',
        colorTextMenuActive: '#4B9F94',
      },
    },
    childrenRender: (children, props) => {
      // if (initialState?.loading) return <PageLoading />;
      return (
        <>
          {routeData?.length > 0 && <TabNavigation data={routeData} />}
          <div className="root-main">{children}</div>
          {!props.location?.pathname?.includes('/login') && (
            <SettingDrawer
              disableUrlParams
              enableDarkTheme
              settings={initialState?.settings}
              onSettingChange={(settings) => {
                console.log(settings, 'settings');

                setInitialState((preInitialState) => ({
                  ...preInitialState,
                  settings,
                }));
              }}
            />
          )}
        </>
      );
    },
    ...initialState?.settings,
  };
};

/**
 * @name request 配置，可以配置错误处理
 * 它基于 axios 和 ahooks 的 useRequest 提供了一套统一的网络请求和错误处理方案。
 * @doc https://umijs.org/docs/max/request#配置
 */
export const request = {
  ...errorConfig,
};
