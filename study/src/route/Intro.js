import React from "react";
import { Link, useSearchParams } from "react-router-dom";

const Intro = () => {
  const [searchParams] = useSearchParams();
  const hello = searchParams.get("hello");
  return (
    <div>
      <Link to="/">메인 페이지로 이동</Link>
      <h1>소개 페이지</h1>
      {hello && <h2>안녕하세요! 😊</h2>}
      <div>
        <Link to="/job/developer">개발자 소개 페이지</Link>
      </div>
      <div>
        <Link to="/job/planner">기획자 소개 페이지</Link>
      </div>
    </div>
  );
};

export default Intro;
