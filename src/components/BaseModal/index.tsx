import { Modal, Space, Button } from 'antd';
import React, { useImperativeHandle, forwardRef, Fragment } from 'react';
import { usePopup } from '@/utils/hooks';
import type { ModalProps } from 'antd';
import classNames from 'classnames';
import { ExtendProps } from './data';
import './index.less';
type BaseModalProps = ModalProps & ExtendProps;

const BaseModal: React.FC<BaseModalProps> = forwardRef((props, ref?: any) => {
  const {
    isModalOpen,
    onClose,
    onOk,
    onCancel,

    okText = '确定',
    okType = 'primary',
    cancelText = '关闭',

    confirmLoading,
    footer = true,
    footerAfterView,
    btnBlock,
    ...modalProps
  } = props;
  const { isVisible, setVisible = () => {} } = usePopup(isModalOpen, onClose);

  // 父组件进行 useRef 调用内部方法重新请求
  useImperativeHandle(ref, () => ({
    ref: ref.current,
    show: () => setVisible(true),
    hide: () => setVisible(false),
  }));

  return (
    <>
      <Modal
        open={isVisible}
        onCancel={onCancel}
        onOk={onOk}
        // centered
        {...modalProps}
        className={classNames('fly-base-modal', modalProps.className)}
        footer={
          footer === true ? (
            <div className="fly-base-modal-footer">
              {footer}
              <Space
                direction={btnBlock ? 'vertical' : 'horizontal'}
                style={{ width: btnBlock ? '100%' : 'auto' }}
                align={btnBlock ? undefined : 'center'}
              >
                <Button
                  onClick={onCancel}
                  className="fly-base-modal-btn"
                  block={btnBlock}
                >
                  {cancelText}
                </Button>
                {onOk && (
                  <Button
                    onClick={onOk}
                    loading={confirmLoading}
                    type={okType === 'danger' ? 'default' : okType}
                    danger={okType === 'danger'}
                    className="fly-base-modal-btn"
                    block={btnBlock}
                  >
                    {okText}
                  </Button>
                )}
              </Space>
              {footerAfterView && (
                <div className="fly-base-modal-footerAfterView">
                  {footerAfterView}
                </div>
              )}
            </div>
          ) : (
            footer
          )
        }
      ></Modal>
    </>
  );
});

export default BaseModal;
