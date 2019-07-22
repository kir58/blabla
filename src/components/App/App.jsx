import React from "react";
import styles from "./App.css";
import { HashRouter as Router, Route } from "react-router-dom";
import ConvertCurrency from "../ConvertCurrency/ConvertCurrency";
import CurrentCurrency from "../CurrentCurrency/CurrentCurrency";

const App = () => {
  return (
    <div className={styles.container}>
      <Router>
        <Route path="/" exact component={CurrentCurrency } />
        <Route path="/convert_currency" component={ConvertCurrency} />
      </Router>
    </div>
  );
};

export default App;