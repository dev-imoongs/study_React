import React from 'react';
import Component1 from './Component1';
import Component2 from './Component2';

const Container = () => {

  const member = {
    name:"임웅빈",
    age:15,
    gender:"male"
  }

  return (
    <div>
      <Component1 memberInfo={member}></Component1>
      {/* <Component2 /> */}
    </div>
  );
};

export default Container;