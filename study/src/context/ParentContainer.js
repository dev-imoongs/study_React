import React from "react";
import ChildContainer from "./ChildContainer";
import { FontSizeProvider } from "./FontSizeContext";

const ParentContainer = () => {
  return (
    // <FontSizeContext.Provider value={{fontSize: '2rem'}}>
    <FontSizeProvider>
      <ChildContainer />
    </FontSizeProvider>
    // </FontSizeContext.Provider>
  );
};

export default ParentContainer;
