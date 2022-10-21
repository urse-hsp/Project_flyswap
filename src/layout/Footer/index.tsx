import { GlobalOutlined, ArrowRightOutlined } from '@ant-design/icons';
import classNames from 'classNames';
import { getLocale } from '@umijs/max';
import { Divider, Button } from 'antd';
import Money from '../Header/RightContent/money';
import footer_logo_img from '@/assets/images/logo/footer_logo.png';
import twitter_logo_img from '@/assets/images/logo/twitter_logo.png';
import telegram_logo_img from '@/assets/images/logo/telegram_logo.png';
import facebook_logo_img from '@/assets/images/logo/facebook_logo.png';

import styles from './index.less';

const Footer: React.FC = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.main}>
        <div className={styles.wrap}>
          <div>
            <img src={footer_logo_img} className={styles.logo} />
          </div>
          <div className={styles.link}>
            <img src={twitter_logo_img} alt="" />
            <img src={telegram_logo_img} alt="" />
            <img src={facebook_logo_img} alt="" />
          </div>
        </div>
        <Divider style={{ backgroundColor: '#57565E' }}></Divider>
        <div className={classNames(styles.wrap, styles.state, 'flexBetween')}>
          <div className={styles.locales}>
            <GlobalOutlined />
            {getLocale().split('-')[0].toUpperCase()}
          </div>
          <div className="flex">
            <Money />
            <Button type="primary" shape="circle" className={styles.btn}>
              BUY FLY
              <ArrowRightOutlined />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
