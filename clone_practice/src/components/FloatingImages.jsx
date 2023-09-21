import React from "react";
import { useDispatch, useSelector } from "react-redux";
import FloatingImage from "./FloatingImage";
import LikeComponent from "./LikeComponent";

const FloatingImages = () => {
  const itemList = useSelector((state) => state.itemInfo);
  return (
    <ul class="action-image-list">
      {itemList.map((item, i) => (
        <FloatingImage key={i} item={item} />
      ))}
    </ul>
  );
};

export default FloatingImages;
