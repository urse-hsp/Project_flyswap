import { Settings as LayoutSettings } from '@ant-design/pro-components';
// import logo_img from '@/assets/logo.png';
/**
 * @name
 */
const Settings: LayoutSettings & {
  pwa?: boolean;
  logo?: string;
} = {
  title: 'FlySwap',
  colorWeak: false,
  navTheme: 'light',
  colorPrimary: '#349084',
  layout: 'top',
  contentWidth: 'Fixed',
  fixedHeader: false,
  fixSiderbar: true,
  pwa: false,
  logo: 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg',
  splitMenus: false,
  iconfontUrl: '',
};

export default Settings;
