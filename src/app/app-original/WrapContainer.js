import React from 'react';
import PopUp from './PopUp';
import ProductSelectContainer from './ProductSelectContainer';
import ResultContainer from './ResultContainer';

const WrapContainer = () => {
  return (
  <div className="wrap">
    <PopUp />
    <ProductSelectContainer />
    <ResultContainer />
  </div>
  );
};

export default WrapContainer;