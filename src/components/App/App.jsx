import React from "react";

import styles from "./App.css";

class App extends React.Component {
  state = { items: [], texInput: '', fetchingState: 'none' };
 

  componentDidMount() {
    this.getItems();
  }

  getItems = async () => {
    this.setState({ fetchingState: 'requested' });
    try {
      const items = await axios.get('https://anton-sergeenkov.ru/app/json-server/index.php');
      this.setState({ items: items.data, fetchingState: 'finished' });
    } catch (e) {
      this.setState({ fetchingState: 'failed' });
    }
  }
  render () {
    console.log(this.state)
    return (
    <div className={styles.container}>sdsd</div>
    );
  }
  
};

export default App;