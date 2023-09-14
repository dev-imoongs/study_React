import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { init, inputcount, result, subcount, sumcount} from '../modules/count';

const Component = () => {
  const number = useSelector(state => state.number);
  const tempNumber = useSelector(state => state.tempNumber)
  const dispatch = useDispatch();

  // const onClickToInputCount = (e) => {
  //   if(number == 0){
  //     dispatch(inputcount(Number(e.target.innerText)))
  //   }else{
  //     dispatch(inputcount(e.target.innerText))
  //   }
  // }
  // const onClickToSum = () => {
  //   dispatch(sumcount(number))
  //   dispatch(init())
  // }

  // const onClickToSub = () => {
  //   dispatch(subcount(Number(number)))
  //   dispatch(init());
  // }

  // const onClickToResult = () => {
  //   dispatch(result(Number(number)));
  // }

  const enterToInputSize = (e) => {
    if(e.key == "Enter")
    dispatch(inputcount(Number(e.target.value)))
  }


  return (
    <>
      <input type='text' onKeyUp={(e)=>{enterToInputSize(e)}}/>
      {/* <div style={{width:'300px', height:'30px',border:'solid 1px black'}}>{number}</div>
      <div>
        <button onClick={onClickToInputCount}>1</button>
        <button onClick={onClickToInputCount}>2</button>
        <button onClick={onClickToInputCount}>3</button>
        </div>
      <div>
        <button onClick={onClickToInputCount}>4</button>
        <button onClick={onClickToInputCount}>5</button>
        <button onClick={onClickToInputCount}>6</button>
        </div>
      <div>
        <button onClick={onClickToInputCount}>7</button>
        <button onClick={onClickToInputCount}>8</button>
        <button onClick={onClickToInputCount}>9</button>
        </div>
      <div>
        <button onClick={onClickToInputCount}>0</button>
        <button onClick={onClickToSum}>+</button>
        <button onClick={onClickToSub}>-</button>
        <button onClick={onClickToResult}>=</button>
      </div> */}
    </>
  );
};

export default Component;