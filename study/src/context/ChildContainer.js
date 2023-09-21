import React from "react";
import Component from "./Component";
import { FontSizeConsumer, FontSizeContext } from "./FontSizeContext";

const ChildContainer = () => {
  return (
    <div>
      <Component />
      {/* <FontSizeContext.Consumer>
        {(context) => (
          <h6 style={{ fontSize: context.fontSize }}>반갑습니다! 😍</h6>
        )}
      </FontSizeContext.Consumer> */}
      <FontSizeConsumer>
        {(context) => (
          <>
            <h6 style={{ fontSize: context.state.fontSize }}>반갑습니다! 😍</h6>
            <button
              onClick={() => {
                context.action.setFontSize("3rem");
              }}
            >
              글자 키우기
            </button>
          </>
        )}
      </FontSizeConsumer>
    </div>
  );
};

export default ChildContainer;
