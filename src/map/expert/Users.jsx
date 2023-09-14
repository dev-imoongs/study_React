import React from 'react';
import User from './User';

const Users = ({users}) => {
  // const userList = users.map((user)=><User name={user.name} username={user.username} email={user.email} />)
  const userList = users.map((user) => <User key={user.id} user={user}/>)

  return (
    <ul>
      {userList}
    </ul>
  );
};

export default Users;