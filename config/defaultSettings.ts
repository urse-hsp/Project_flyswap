import { theme } from './theme';

/**
 * @name
 */
const Settings: any & {
  pwa?: boolean;
  logo?: string;
} = {
  title: 'FlySwap',
  colorWeak: false,
  navTheme: 'light',
  colorPrimary: theme,
  layout: 'top',
  contentWidth: 'Fixed',
  fixedHeader: true,
  fixSiderbar: true,
  pwa: false,
  splitMenus: false,
  iconfontUrl: '',
};

export default Settings;
