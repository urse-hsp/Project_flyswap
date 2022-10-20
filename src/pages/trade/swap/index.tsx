import React from 'react';

interface tradeSwapType {
  isVisible?: boolean;
  onClose?: () => any;
}

const TradeSwap: React.FC<tradeSwapType> = () => {
  return <div style={{ height: '1000px' }}>TradeSwap</div>;
};
export default TradeSwap;
