import React, { useState } from 'react';
import classnames from 'classnames';
import { DownOutlined } from '@ant-design/icons';
import { Space, InputNumber, Radio } from 'antd';
import { Typography } from 'antd';
const { Paragraph } = Typography;

import styles from './index.less';

import Fly_logo from '@/assets/images/logo/fly_logo.png';

interface CurrencyItemType {
  isSelect?: boolean;
}

const selectList: { label: string; value: string }[] = [
  {
    label: '25%',
    value: '25',
  },
  {
    label: '50%',
    value: '50',
  },
  {
    label: '75%',
    value: '75',
  },
  {
    label: 'MAX',
    value: 'MAX',
  },
];

const CurrencyItem: React.FC<CurrencyItemType> = (props) => {
  const { isSelect } = props;
  const [value] = useState<string>('25');

  const onChange = () => {};
  return (
    <div className={styles.currency}>
      <header className={classnames(styles.head, 'flexBetween')}>
        <Space>
          <img src={Fly_logo} className={styles.logo} />
          <span>FLY</span>
          <DownOutlined style={{ fontSize: '12px' }} />
          <Paragraph copyable={{ text: '1' }}></Paragraph>
        </Space>
        <div>Blance:12.34</div>
      </header>
      <main className={styles.main}>
        <InputNumber<string>
          defaultValue="1"
          min="0"
          max="10"
          // step="0.00000000000001"
          stringMode
          className={styles.input}
          bordered={false}
          controls={false}
        />
        {isSelect && (
          <div className={styles.select}>
            <Radio.Group
              defaultValue={value}
              onChange={onChange}
              value={value}
              size="small"
              buttonStyle="solid"
            >
              <Space>
                {selectList.map((item) => {
                  return (
                    <Radio.Button value={item.value} key={item.value}>
                      {item.label}
                    </Radio.Button>
                  );
                })}
              </Space>
            </Radio.Group>
          </div>
        )}
      </main>
    </div>
  );
};
export default CurrencyItem;
