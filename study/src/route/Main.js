import React from 'react';
import { Link } from 'react-router-dom';

const Main = () => {
  return (
    <div>
      <h1>메인 페이지</h1>
      <Link to="/intro?hello=true">소개 페이지로 이동</Link>
    </div>
  );
};

export default Main;