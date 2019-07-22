/* eslint-disable import/no-extraneous-dependencies */
import "@babel/polyfill";
import React from "react";
import { render } from "react-dom";
import App from "./components/App/App";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { createStore, applyMiddleware, compose } from "redux";
import reducers from "./reducers";
import { fetchValutes } from "./actions";

/* eslint-disable no-underscore-dangle */
const ext = window.__REDUX_DEVTOOLS_EXTENSION__;
const devtoolMiddleware = ext && ext();
/* eslint-enable */

const store = createStore(
  reducers,
  compose(
    applyMiddleware(thunk),
    devtoolMiddleware
  )
);

store.dispatch(fetchValutes());
render(<Provider store={store}><App /></Provider>, document.getElementById("root"));