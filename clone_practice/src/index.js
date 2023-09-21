import React from 'react';
import ReactDOM from 'react-dom/client';
import './hajang-detail.css';
import reportWebVitals from './reportWebVitals';
import { legacy_createStore as createStore } from "redux";
import Hajang from './module/hajang-redux';
import App from './App';
import { Provider } from 'react-redux';
import { devToolsEnhancer } from 'redux-devtools-extension';

const root = ReactDOM.createRoot(document.getElementById('root'));
const store = createStore(Hajang, devToolsEnhancer());
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
