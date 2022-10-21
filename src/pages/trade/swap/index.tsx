import React from 'react';
import { useIntl } from '@umijs/max';
import { Divider, Typography, Button } from 'antd';
import { ItemView } from '@/components';
import {
  FieldTimeOutlined,
  RedoOutlined,
  SettingOutlined,
} from '@ant-design/icons';
import CurrencyItem from './component/currencyItem';
import arrow_img from '@/assets/images/icon/arrow_botton.png';
import styles from './index.less';
const { Title, Paragraph } = Typography;

interface tradeSwapType {
  isVisible?: boolean;
  onClose?: () => any;
}

const TradeSwap: React.FC<tradeSwapType> = () => {
  const intl = useIntl();

  const clickIcon = () => {
    console.log(1);
  };
  return (
    <ItemView>
      <div className={styles.swap}>
        <header className={styles.header}>
          <Title level={3} className={styles.title}>
            Swap
            <div className={styles.right}>
              <SettingOutlined onClick={clickIcon} />
              <FieldTimeOutlined onClick={clickIcon} />
              <RedoOutlined onClick={clickIcon} />
            </div>
          </Title>

          <Paragraph className={styles.content}>
            {intl.formatMessage({ id: 'pages.trade.swap.Paragraph' })}
          </Paragraph>
        </header>
        <Divider />
        <main className={styles.main}>
          <CurrencyItem isSelect></CurrencyItem>
          <div className="flexCenter">
            <img src={arrow_img} className={styles.icon} />
          </div>
          <CurrencyItem></CurrencyItem>
          <div className={styles.data}>
            <div className="flexBetween">
              <span>
                {intl.formatMessage({ id: 'pages.trade.swap.price' })}
              </span>
              <span>0.00123454 FIBO Per FLY</span>
            </div>
            <div className="flexBetween">
              <span>
                {intl.formatMessage({ id: 'pages.trade.swap.Slippage' })}
              </span>
              <span>0.5%</span>
            </div>
            <Button type="primary" block className={styles.btn}>
              {intl.formatMessage({ id: 'pages.trade.swap.btn' })}
            </Button>
          </div>
        </main>
      </div>
    </ItemView>
  );
};
export default TradeSwap;
