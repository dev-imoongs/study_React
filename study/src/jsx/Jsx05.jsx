import React from 'react';
import PassComponent from './PassComponent';
import BlockComponent from './BlockComponent';
import Lucky from './lucky';

const Jsx05 = () => {
  const age = 22;
  const checkAdult = age>20;
  const checkEven = age % 2 == 0;
  const style = {color:'red'}
  
  return (
    <div>
      {checkAdult && checkEven?<Lucky style={style} />:""}
      {checkAdult?<PassComponent />:<BlockComponent />}
    </div>
  );
};

export default Jsx05;
