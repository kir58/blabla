import { createAction } from "redux-actions";
import axios from "axios";

export const fetchValutesRequest = createAction("VALUTES_FETCH_REQUEST");
export const fetchValutesSuccess = createAction("VALUTES_FETCH_SUCCESS");
export const fetchValutesFailure = createAction("VALUTES_FETCH_FAILURE");
export const toggleFavouriteValute = createAction("TOGGLE_FAVOURITE_VALUTE");

export const fetchValutes = () => async dispatch => {
  dispatch(fetchValutesRequest());
  try {
    const response = await axios.get('https://www.cbr-xml-daily.ru/daily_json.js');
    dispatch(fetchValutesSuccess({ valutes: { 'RUB': { Value: 1, Nominal: 1}, ...response.data.Valute }}));
  } catch (e) {
    dispatch(fetchValutesFailure());
  }
};