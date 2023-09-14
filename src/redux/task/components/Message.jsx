import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeFontSize } from '../modules/InputFontSize';

const Message = () => {
  const FontSize = useSelector(state => state.fontsize);
  const dispatch = useDispatch();

  const enterToInputSize = (e) => {
    if(e.key == "Enter")
    dispatch(changeFontSize(e.target.value))
  }



  return (
    <>
      <p style={{fontSize:FontSize+"px"}}>재미있는 리덕스! 😂</p>
      <input type='text' onKeyUp={(e)=>{enterToInputSize(e)}}/>
    </>
  );
};

export default Message;