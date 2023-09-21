import React from "react";
import LikeComponent from "../components/LikeComponent";
import FloatingButtonComponent from "../components/FloatingButtonComponent";

const FloatingButtonContainer = () => {
  return (
    <div class="floating-action-button-container">
      <FloatingButtonComponent />
      <LikeComponent />
    </div>
  );
};

export default FloatingButtonContainer;
