import React from 'react';

interface BridgeType {
  isVisible?: boolean;
  onClose?: () => any;
}

const Bridge: React.FC<BridgeType> = () => {
  return <div style={{ height: '1000px' }}>Bridge</div>;
};
export default Bridge;
