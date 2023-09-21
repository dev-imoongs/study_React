import React from "react";
import { useDispatch } from "react-redux";
import { addImage } from "../module/hajang-redux";

const FloatingImage = ({item}) => {
  const dispatch = useDispatch()
  return (
    <li class="action-image-list-item">
      <button 
      type="button" 
      class="image-button-box"
      onClick={()=>{dispatch(addImage(item))}}>
        <img
          src={item.image}
          class="action-participation-image"
        />
      </button>
    </li>
  );
};

export default FloatingImage;
