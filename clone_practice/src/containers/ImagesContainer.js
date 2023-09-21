import React from "react";
import FloatingButtonContainer from "./FloatingButtonContainer";
import FloatingTitle from "../components/FloatingTitle";
import FloatingImages from "../components/FloatingImages";

const ImagesContainer = () => {
  return (
    <div className="project-detail-information">
      <div class="floating-action-buttons">
        <FloatingTitle />
        <FloatingImages />
        <FloatingButtonContainer />
      </div>
    </div>
  );
};

export default ImagesContainer;
