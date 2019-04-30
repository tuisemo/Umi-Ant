import React from 'react';

const MouseTracker = props => {
  const { mouse } = props;
  return (
    <div
      style={{
        position: 'absolute',
        width: '50px',
        height: '50px',
        left: mouse.x,
        top: mouse.y,
        background: '#eee',
      }}
    />
  );
};
export default MouseTracker;
