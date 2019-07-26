import React from "react";
import styles from "./CurrentCurrency.css";
import * as actions from '../../actions';
import { connect } from "react-redux";
import cn from "classnames";
import { getAllValutes, getFavouriteValutes } from "../../selectors";

const mapStateToProps = state => ({
  allValutes: getAllValutes(state),
  favouriteValutes: getFavouriteValutes(state)
});

const actionCreators = {
  toggleFavouriteValute: actions.toggleFavouriteValute,
};

class ConvertCurrency extends React.Component {
  handleToggleFavouriteValute = code => () => {
    const { toggleFavouriteValute } = this.props;
    toggleFavouriteValute({ code });
  }
 	render() {
    const { allValutes, favouriteValutes } = this.props;
    const getClassLabel = code => {
      return cn({
        [styles.label]: true,
        [styles.tabaleRow_element]: true,
        [styles.inFavourit]: favouriteValutes.includes(code)
      })
    }
		return (
      <>
        <h2 className={styles.title}>Курсы валют</h2>
        <div className={styles.tableHeader}>
          <div className={styles.tableHeader_element}>Наименование</div>
          <div className={styles.tableHeader_element}>Значение</div>
          <div className={styles.tableHeader_element}>Избранное</div>
        </div>
        <ul className={styles.list}>{allValutes.map(valute => valute.CharCode === 'RUS' ? null :
          (
          <li key={valute.Id} className={styles.item}>
            <div className={styles.tabaleRow_element}>{valute.Name} ({valute.CharCode})</div>
            <div className={styles.tabaleRow_element}>{valute.Value}</div> 
            <button
              className={styles.favourit} 
              onClick={this.handleToggleFavouriteValute(valute.CharCode)}
              id={valute.CharCode}
            />
            <label 
              className={getClassLabel(valute.CharCode)}
              htmlFor={valute.CharCode}>
                {favouriteValutes.includes(valute.CharCode) ? 'Удалить из избранного' : 'Добавить в избранное'}
            </label>
          </li>
        ))}
        </ul>
      </>
    )
	}
}
export default connect(mapStateToProps, actionCreators)(ConvertCurrency);