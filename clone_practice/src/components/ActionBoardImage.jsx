import React from 'react';
import ActionImageWrap from './ActionImageWrap';

const ActionBoardImage = () => {
  return (
    <div style={{ position: "relative", display: "flex" }}>
      <ActionImageWrap isEven={true}></ActionImageWrap>
      <ActionImageWrap isEven={false}></ActionImageWrap>
    </div>
  );
};

export default ActionBoardImage;