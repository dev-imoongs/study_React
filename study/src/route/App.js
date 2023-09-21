import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Main from "./Main";
import Intro from "./Intro";
import Job from "./Job";
import { RouteProvider } from "./contexts/RouteContext";
import Header from "./Header";
import PageNotFound from "./PageNotFound";
import Admin from "./Admin";
import AdminHeader from "./AdminHeader"
import { useDispatch } from "react-redux";
import { setPreviousUrl } from "./modules/route";

const App = () => {
  // 요청한 경로에 대한 정보를 가져올 수 있는 Hook 함수
  const location = useLocation();
  const dispatch = useDispatch();

  // pathname: uri
  // search: query string
  const path = location.pathname + location.search;


  if(path !== "/admin"){
    dispatch(setPreviousUrl(path));
  }

  return (
    <RouteProvider>
      <Routes>
        <Route element={<Header />}>
          <Route path="/" element={<Main />} />
          <Route path="/intro" element={<Intro />} />
          {/* 중첩 라우트 */}
          {/* 부모 경로 안에 여러 자식 경로가 있을 때 사용한다. */}
          <Route path="/job" element={<Job />}>
            <Route path=":title" element={<Job />} />
          </Route>
        </Route>
        <Route element={<AdminHeader />}>
          <Route path="/admin" element={<Admin />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </RouteProvider>
  );
};

export default App;
