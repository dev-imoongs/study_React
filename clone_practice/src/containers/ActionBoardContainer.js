import React from "react";
import ActionBoardTitle from "../components/ActionBoardTitle";
import ActionBoardImage from "../components/ActionBoardImage";

const ActionBoardContainer = () => {
  return (
    <>
      <div id="action-board" class="project-board-tab">
        <ActionBoardTitle />
        <ActionBoardImage />
      </div>
    </>
  );
};

export default ActionBoardContainer;
