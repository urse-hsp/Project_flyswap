import React, { useState } from 'react';
import { Tabs } from 'antd';
import { history } from '@umijs/max';

import styles from './index.less';

interface tabNavigationType {
  data: any[];
}

const TabNavigation: React.FC<tabNavigationType> = (props) => {
  const { data } = props;
  const [defaultActiveKey, setDefaultActiveKey] = useState(
    history.location.pathname,
  );

  const onChange = (e: string) => {
    history.replace(e);
    setDefaultActiveKey(e);
  };

  return (
    <div className={styles.tabNavigation}>
      <Tabs
        defaultActiveKey={defaultActiveKey}
        onChange={onChange}
        destroyInactiveTabPane
      >
        {data?.map((item) => {
          return <Tabs.TabPane tab={item.name} key={item.path} />;
        })}
      </Tabs>
    </div>
  );
};
export default TabNavigation;
