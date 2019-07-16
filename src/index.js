/* eslint-disable import/no-extraneous-dependencies */
import "@babel/polyfill";
import React from "react";
import { render } from "react-dom";
import App from "./components/App/App";

render(<App />, document.getElementById("root"));