import React from "react";
import styles from "./CurrentCurrency.css";
import * as actions from '../../actions';
import { connect } from "react-redux";
import { getAllValutes, getFavouriteValutes } from "../../selectors";

const mapStateToProps = state => ({
  allValutes: getAllValutes(state),
  getFavouriteValutes: getFavouriteValutes(state)
});

const actionCreators = {
  toggleFavouriteValute: actions.toggleFavouriteValute,
};

class ConvertCurrency extends React.Component {
  handleToggleFavouriteValute = code => () => {
    const { toggleFavouriteValute } = this.props;
    console.log(this.props)
    toggleFavouriteValute({ code });
  }
 	render() {
    const { allValutes } = this.props;
    console.log(allValutes)
		return (
      <>
        <div>
          <p>Базовая валюта</p>
        </div>
        <ul className={styles.list}>{allValutes.map(valute => (
          <li key={value.Id} className={styles.item}>
            <div className={styles.name}>{valute.Name}</div>
            <div className={styles.value}>{valute.Value}</div> 
            <button className={styles.favourit} onClick={this.handleToggleFavouriteValute(key)}>Добавить в избранное</button>
          </li>
        ))}
        </ul>
      </>
    )
	}
}
export default connect(mapStateToProps, actionCreators)(ConvertCurrency);