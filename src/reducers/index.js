/* eslint-disable prettier/prettier */
import { combineReducers } from "redux";
import { handleActions } from "redux-actions";
import { reducer as formReducer } from "redux-form";
import * as actions from "../actions";

const friendsFetchingState = handleActions(
  {
    [actions.fetchValutesRequest]() {
      return "requested";
    },
    [actions.fetchValutesFailure]() {
      return "failed";
    },
    [actions.fetchValutesSuccess]() {
      return "finished";
    }
  },
  "none"
);

const valutes = handleActions(
  {
    [actions.fetchValutesSuccess](state, { payload: { valutes } }) {
      return { ...state,
        valutesByCode: valutes,
        allCods: Object.keys(valutes)
      }
    },
    [actions.toggleFavouriteValute](state, { payload: { code } }) {
      return state.favouriteValutes.includes(code) ?
        { ...state, favouriteValutes: state.favouriteValutes.filter(codeValute => codeValute !== code) }
        : { ...state, favouriteValutes: [code, ...state.favouriteValutes] }
    },
	}, 
  { valutesByCode: {}, allCods: [], favouriteValutes: [] }
);

export default combineReducers({
  friendsFetchingState,
  valutes,
  form: formReducer,
});