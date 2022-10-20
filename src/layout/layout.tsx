// 运行时配置文件
import { useState } from 'react';
import Footer from '@/components/Footer';
// import HeaderView from '@/components/Header';
import TabNavigation from '@/components/Header/tabNavigation';
import RightContent from '@/components/Header/RightContent';
import type { RunTimeLayoutConfig } from '@umijs/max';
// import { history } from '@umijs/max';
import routesList from '../../config/routes';
import { ConfigProvider } from 'antd';

// ProLayout 支持的api https://procomponents.ant.design/components/layout

export const layout: RunTimeLayoutConfig = ({
  initialState,
  setInitialState,
}) => {
  console.log(initialState);
  console.log(setInitialState);
  console.log(9999);

  // const match = useRouteData();
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
        let routeList: any = [];
        for (let i = 0; i < routesList.length; i++) {
          const list: any = routesList[i]?.routes;
          if (list) {
            for (let j = 0; j < list.length; j++) {
              console.log(666);
              if (pathname === list[j].path) {
                console.log(routesList[i].routes);
                routeList = routesList[i].routes;
                break;
              }
            }
          }
        }
        setRouteData(routeList);
      };
      forRoute();
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
      if (initialState?.loading) return 123;
      return (
        <>
          {/* <ConfigProvider prefixCls="custom"> */}
          {routeData?.length > 0 && <TabNavigation data={routeData} />}
          <div className="root-main">{children}</div>
          {/* </ConfigProvider> */}
        </>
      );
    },
    ...initialState?.settings,
  };
};

export default layout;
