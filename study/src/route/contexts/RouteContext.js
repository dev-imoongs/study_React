import { createContext } from "react";

const RouteContext = createContext({
  table: {},
  header: {},
});

const value = {
  table: {
    margin: "30px auto",
    width: "300px",
    textAlign: "center",
    border: "1px solid black",
  },
  header: {
    width: "100%",
    height: "50px",
    backgroundColor: "pink",
    display: "flex",
    alignItems: "center",
  }
};

const RouteProvider = ({ children }) => {
  return <RouteContext.Provider value={value}>{children}</RouteContext.Provider>;
};

export { RouteContext, RouteProvider };
