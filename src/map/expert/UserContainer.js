import React from "react";
import Users from "./Users";
import { useAsync } from "react-async"
// https://jsonplaceholder.typicode.com/users

async function getUsers(){
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await response.json();
  return users;
}

const UserContainer = () => {
  const {value:users, isResolved} = useAsync({promiseFn: getUsers})


  return(
    <div>
      {isResolved && <Users users={users}/>}
    </div>
  );
};

export default UserContainer;
