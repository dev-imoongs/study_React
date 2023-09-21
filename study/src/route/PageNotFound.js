import React from 'react';
import { useNavigate } from 'react-router-dom';

const PageNotFound = () => {
  const navigate = useNavigate();
  const onClickToGoBack = () => {
    navigate(-1);
  }

  const onClickToGoMain = () => {
    navigate("/");
  }
  return (
    <div>
      <h1>페이지를 표시할 수 없습니다. 😢</h1>
      <button onClick={onClickToGoBack}>뒤로 가기</button>
      <button onClick={onClickToGoMain}>메인 페이지로</button>
    </div>
  );
};

export default PageNotFound;