import React from 'react';
import { useSelector } from 'react-redux';
import ActionImage from './ActionImage';

const ActionImageWrap = ({isEven}) => {
  const action_board_images = useSelector((state)=>state.actionBoardImages)

  let action_images;
  if(isEven){
    action_images = action_board_images.filter((itemInfo,i)=>(i+1) % 2 == 1).map(({image},i)=><ActionImage image={image} key={i}/>)
  }else{
    action_images = action_board_images.filter((itemInfo,i)=>(i+1) % 2 == 0).map(({image},i)=><ActionImage image={image} key={i}/>)
  }
 
return <div class="action-image-wrap">{action_images}</div>;
};

export default ActionImageWrap;