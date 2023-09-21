import React from "react";
import ReactDOM from "react-dom/client";
import "./banner/main.css";
// import "./index.css";
// import './map/expert/user.css';
// import App from './App';
import reportWebVitals from "./reportWebVitals";
// import SampleSlide01 from "./banner/SampleSlide01";
import { BrowserRouter } from "react-router-dom";
import App from "./route/App";
// import App from './redux/App';
// import { Provider } from 'react-redux';
import { devToolsEnhancer } from "redux-devtools-extension";
// import Mount from './component/class/Mount';
// import SideEffect from './component/function/side-effect/SideEffect';
// import Mount from './component/function/side-effect/Mount';
// import ProductContainer from './component/function/memoization/ProductContainer';
// import ParentContainer from './context/ParentContainer';
// import App from './context/task/App';
// import LifecycleContainer from './component/class/LifecycleContainer';
// import Sounds from './state/basic/Sounds';
// import Color from './state/basic/Color';
// import Name from './ref/Name';
// import Check from './ref/Check';
// import CheckBox from './ref/CheckBox';
// import FoodContainer from './state/expert/FoodContainer';
// import Form from './custom-hook/Form';
// import FoodContainer from './map/basic/FoodContainer';
// import UserContainer from './map/expert/UserContainer';
// import Jsx06 from './jsx/Jsx06';
// import Count from './state/basic/Count';
// import Jsx02 from './jsx/Jsx02';
// import Jsx03 from './jsx/Jsx03';
// import Jsx04 from './jsx/Jsx04';
// import Container from './props/Container';
// import Jsx05 from './jsx/Jsx05';
// import Jsx01 from './jsx/Jsx01';
import { legacy_createStore as createStore } from "redux";
import route from "./route/modules/route";
import { Provider } from "react-redux";
// import count from './redux/modules/count';
// import fontSize from './redux/task/modules/fontSize';
// import FontSizeContainer from './redux/task/containers/FontSizeContainer';
// import fontSizeControl from './redux/task/modules/fontSizeControl';
// import App from './app/app-original/App';

const root = ReactDOM.createRoot(document.getElementById("root"));
// const store = createStore(count, devToolsEnhancer());
// const store = createStore(fontSize, devToolsEnhancer());
// const store = createStore(fontSizeControl, devToolsEnhancer());
const store = createStore(route, devToolsEnhancer());
root.render(
  // <React.StrictMode>
  <>
    {/* <App /> */}
    {/* <Jsx01 /> */}
    {/* <Jsx02 /> */}
    {/* <Jsx03 /> */}
    {/* <Jsx04 /> */}
    {/* <Jsx05 /> */}
    {/* <Container /> */}
    {/* <FoodContainer /> */}
    {/* <UserContainer /> */}
    {/* <Jsx06 /> */}
    {/* <Count /> */}
    {/* <Sounds /> */}
    {/* <Color /> */}
    {/* <Name /> */}
    {/* <Check /> */}
    {/* <CheckBox /> */}
    {/* <FoodContainer /> */}
    {/* <Form /> */}
    {/* <LifecycleContainer /> */}
    {/* <Mount /> */}
    {/* <SideEffect /> */}
    {/* <Mount /> */}
    {/* <ProductContainer /> */}
    {/* <ParentContainer /> */}
    {/* <App /> */}
    {/* <Provider store={store}> */}
    {/* <App /> */}
    {/* <FontSizeContainer /> */}
    {/* </Provider> */}
    {/* <App /> */}
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
    {/* <SampleSlide01 /> */}
  </>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
