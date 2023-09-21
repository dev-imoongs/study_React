import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useSearchParams } from 'react-router-dom';

const Admin = () => {
  const [searchParams] = useSearchParams();
  const login = searchParams.get("login");
  const previousUrl = useSelector((state) => state.previousUrl);
  console.log(previousUrl);
  if(login === "true"){
  return (
    <div>
      <h1>관리자 페이지</h1>
    </div>
  );
}

return <Navigate to={previousUrl} replace={true}/>
};

export default Admin;