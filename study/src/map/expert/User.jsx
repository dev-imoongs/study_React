import React from 'react';

const User = ({user}) => {
  const {name, username, phone, email, address} = user
  return (
    <li>
      <h2>{name}</h2>  
      <div>{username}</div>
      <hr></hr>
      <div>{phone}</div>
      <div>{email}</div>
      <div>{address.zipcode}, {address.street}, {address.suite}, {address.city}</div>
    </li>
  );
};

export default User;