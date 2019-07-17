import React from "react";
import styles from "./CurrentCurrency.css";
import axios from "axios"

class ConvertCurrency extends React.Component {
  
  state = { valutes: [], texInput: '', fetchingState: 'none' };
  componentDidMount() {
    this.getValutes();
  }
  getValutes = async () => {
    this.setState({ fetchingState: 'requested' });
    try {
      const response = await axios.get('https://www.cbr-xml-daily.ru/daily_json.js');
      this.setState({ valutes: response.data.Valute, fetchingState: 'finished' });
    } catch (e) {
      this.setState({ fetchingState: 'failed' });
    }
  }
	render() {
    const { valutes } = this.state
    const keys = Object.keys(valutes)
		return (
      <ul>{keys.map(key => (
        <li>{valutes[key].Name}</li>
      ))}
      </ul>
    )
	}
}
export default ConvertCurrency