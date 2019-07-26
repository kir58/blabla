import React from "react";
import axios from "axios";
import styles from "./ConvertCurrency.css";
import { connect } from "react-redux";
import { Field, reduxForm, change, initialize } from "redux-form";
import { getAllValutes, getCurrentList, getConvertList, getConvertValute, getCurrentValute   } from "../../selectors";

const mapStateToProps = state => ({
  allValutes: getAllValutes(state),
	currentList: getCurrentList(state),
	convertList: getConvertList(state),
	convertValute: getConvertValute(state),
  currentValute: getCurrentValute(state),
});

const actionsCreators = {
  change,
  initialize,
}
class ConvertCurrency extends React.Component {
  state = { wtf: [] }
  componentDidUpdate(prevProps) {
    const { change, convertValute, currentValute } = this.props;
    if (prevProps.convertValute !== convertValute) {
      this.props.change('convertValute', convertValute)
    }
    
    if (prevProps.currentValute === currentValute) {
      console.log(currentValute)
     //this.props.change('currentValute', currentValute)
    }
  }
  
  componentDidMount() {
    const { initialize, convertValute, currentValute } = this.props;
    initialize( {
		currentValute: currentValute,
    convertValute: convertValute,
		currentCountry: 'RUB',
		convertCountry: 'USD',
	})
  }
	render() {
		const { allValutes, currentList, convertList } = this.props;
    //console.log(this.props.currentValute)
		return (
			<form className={styles.convertForm}>
				<div className={styles.itemForm}>
					<Field
						name="convertCountry"
						type="select"
						required
						component="select"
					>
					 {convertList.map((opt, i) => (
						<option key={i} value={opt}>{opt}</option>
					))}
					</Field>
					<Field
						className={styles.valuteIntup}
						name="currentValute"
						id="currentValute"
						type="text"
						required
						component="input"
					/>
				</div>
				<div className={styles.itemForm}>
				<Field
						name="currentCountry"
						type="select"
						required
						component="select"
					>
					 {currentList.map((opt, i) => (
						<option key={i} value={opt}>{opt}</option>
					))}
				</Field>
				<Field
          className={styles.valuteIntup}
          name="convertValute"
          id="convertValute"
          type="text"
          required
          component="input"
					/>
				</div>
			</form>
		)
	}
}
const ConvertCurrencyForm = reduxForm({ form: 'CurrentForm', 
})(ConvertCurrency)
export default connect(mapStateToProps, actionsCreators)(ConvertCurrencyForm)