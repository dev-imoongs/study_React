import React from "react";
import { FontSizeConsumer, FontSizeContext } from "./FontSizeContext";

const Component = () => {
  return (
    // <FontSizeContext.Consumer>
    //   {(context) => (
    //     <p style={{ fontSize: context.fontSize }}>안녕하세요! 😊</p>
    //   )}
    // </FontSizeContext.Consumer>
    <FontSizeConsumer>
      {(context) => (
        <>
        <p style={{ fontSize: context.state.fontSize }}>안녕하세요! 😊</p>
        <button onClick={() => {context.action.setFontSize("0.5rem")}}>글자 줄이기!</button>
        </>
      )}
    </FontSizeConsumer>
  );
};

export default Component;
