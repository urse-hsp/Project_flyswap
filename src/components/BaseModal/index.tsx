import { Modal, Space, Button } from 'antd';
import React, { useImperativeHandle, forwardRef, Fragment } from 'react';
import { usePopup } from '@/utils/hooks';
import type { ModalProps } from 'antd';
import classNames from 'classnames';
import { ExtendProps } from './index.d';
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
    footerButtons,
    confirmLoading,
    ...modalProps
  } = props;
  const {
    isVisible,
    setVisible = () => {},
    // close,
  } = usePopup(isModalOpen, onClose);

  // 父组件进行 useRef 调用内部方法重新请求
  useImperativeHandle(ref, () => ({
    ref: ref.current,
    show: () => setVisible(true),
    hide: () => setVisible(false),
  }));

  // if ((!footerButtons && onOk) || footerButtons?.length! > 1) {
  //   cancelText = '取消';
  // }
  return (
    <>
      {/* <Modal open={isVisible} onCancel={close}>
      </Modal> */}
      <Modal
        open={isVisible}
        onCancel={onCancel}
        onOk={onOk}
        // centered
        {...modalProps}
        className={classNames('fly-base-modal', modalProps.className)}
        footer={
          <div className="fly-base-modal-footer">
            {/* <Space size={8}>
              <Button onClick={onCancel}>{cancelText}</Button>
              <Button type="primary" onClick={onOk}>
                确认
              </Button>
            </Space> */}
            <Space size={8}>
              {!!footerButtons ? (
                footerButtons?.map((item: any, i: number) => {
                  if (item === 'close') {
                    return (
                      <Button onClick={onCancel} key={i}>
                        {cancelText}
                      </Button>
                    );
                  }
                  const {
                    // text,
                    onClick = () => {},
                    isClose = false,
                    ...btnProps
                  } = item;
                  return (
                    <Button
                      {...btnProps}
                      onClick={(e) => {
                        onClick(e);
                        if (isClose && onCancel) {
                          onCancel(e);
                        }
                      }}
                      key={i}
                    >
                      {item.text}
                    </Button>
                  );
                })
              ) : (
                <Fragment>
                  <Button onClick={onCancel}>{cancelText}</Button>
                  {onOk && (
                    <Button
                      onClick={onOk}
                      loading={confirmLoading}
                      type={okType === 'danger' ? 'default' : okType}
                      danger={okType === 'danger'}
                    >
                      {okText}
                    </Button>
                  )}
                </Fragment>
              )}
            </Space>
          </div>
        }
      ></Modal>
    </>
  );
});

export default BaseModal;
