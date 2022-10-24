export interface ExtendProps {
  isModalOpen?: boolean;
  onClose?: () => any;
  onChange?: () => any;
  ref?: any;
  /**
   * @description OK按钮文案
   */
  okText?: string;
  /**
   * @description OK按钮类型
   */
  // okType?:
  //   | 'primary'
  //   | 'link'
  //   | 'text'
  //   | 'ghost'
  //   | 'default'
  //   | 'dashed'
  //   | undefined;
  /**
   * @description 取消按钮文案，没有其他按钮时默认值为‘关闭’
   * @default 取消
   */
  cancelText?: string;
  /**
   * @description OK按钮处理函数
   */
  onOk?: () => void;
  /**
   * @description 自定义按钮列表
   */
  /**
   * @description OK按钮的loading状态
   */
  confirmLoading?: boolean;
  showCancel?: boolean;
  /**
   * @description View
   */
  footerAfterView?: any;
  btnBlock?: boolean; //  Block 按钮
  footer?: any;
}
