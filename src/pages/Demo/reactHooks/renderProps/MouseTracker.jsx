import React from 'react';
import Mouse from './Mouse';
import Cat from './Cat';

const MouseTracker = () => {
  const renderCat = mouse => <Cat mouse={mouse} />;

  return (
    <div style={{ height: '100%' }}>
      <h1>移动鼠标!</h1>
      <Mouse render={renderCat} />
    </div>
  );
};
export default MouseTracker;
