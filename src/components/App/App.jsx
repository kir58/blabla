import React from "react";
import styles from "./App.css";
import ConvertCurrency from "../ConvertCurrency/ConvertCurrency";
import CurrentCurrency from "../CurrentCurrency/CurrentCurrency";

class App extends React.Component {
  render () {
    return (
      <div className={styles.container}>
        <ConvertCurrency />
        <CurrentCurrency />
      </div>
    );
  }
  
};

export default App;