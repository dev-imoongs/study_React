import React from 'react';

const FailedLog = () => {
  const style = {color: "red"};
  return (
    <div>
      <h1 style={style}> 로그인 실패. 😢</h1>
    </div>
  );
};

export default FailedLog;