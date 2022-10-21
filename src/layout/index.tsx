// 运行时配置文件
import { useState } from 'react';
import Footer from './Footer';
// import HeaderView from './Header';
import TabNavigation from './Header/tabNavigation';
import RightContent from './Header/RightContent';
import type { RunTimeLayoutConfig } from '@umijs/max';
// import { history } from '@umijs/max';
import routesList from '../../config/routes';
import logo_img from '@/assets/images/logo/logo.png';

// ProLayout 支持的api https://procomponents.ant.design/components/layout

export const layout: RunTimeLayoutConfig = ({
  initialState,
  // setInitialState,
}) => {
  // const match = useRouteData();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [routeData, setRouteData] = useState<any[]>([]);
  return {
    logo: logo_img,
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
        // colorBgHeader: '#FFFFFF',
        // colorTextMenu: '#4B9F94',
        // colorTextMenuSelected: '#4B9F94',
        // colorTextMenuActive: '#4B9F94',
      },
    },
    childrenRender: (children) => {
      if (initialState?.loading) return 123;
      return (
        <>
          {routeData?.length > 0 && <TabNavigation data={routeData} />}
          <div className="root-main">{children}</div>
        </>
      );
    },
    ...initialState?.settings,
  };
};

export default layout;
