import React from "react";
import styles from "./ConvertCurrency.css";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { getAllValutes, getFavouriteValutes, getAllCods, getConvertValute  } from "../../selectors";

const mapStateToProps = state => ({
  allValutes: getAllValutes(state),
	allCods: getAllCods(state),
	convertValute: getConvertValute(state),
});

class ConvertCurrency extends React.Component {
	render() {
		const { allValutes, allCods } = this.props;
		console.log(allValutes)
		return (
			<form className={styles.convertForm}>
				<div className={styles.itemForm}>
					<Field
						name="convertCountry"
						type="select"
						required
						component="select"
					>
					 {allCods.map((opt, i) => (
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
					 {allCods.reverse().map((opt, i) => (
						<option key={i} value={opt}>{opt}</option>
					))}
				</Field>
				<input value={this.props.convertValute} className={styles.valuteIntup}/>
				</div>
			</form>
		)
	}
}
const ConvertCurrencyForm = reduxForm({ form: 'CurrentForm', 
	initialValues: {
		currentValute: 1,
		currentCountry: 'AUD',
		convertCountry: 'AZN',
	}
})(ConvertCurrency)
export default connect(mapStateToProps)(ConvertCurrencyForm)