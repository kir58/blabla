import { createSelector } from "reselect";

export const getFavouriteValutes = state => state.valutes.favouriteValutes
const getValutesByCode = state => state.valutes.valutesByCode
const getAllCod = state => state.valutes.allCods

export const getAllValutes = createSelector(
  getFavouriteValutes,
  getValutesByCode,
  getAllCod,
  (favouriteValutes, valutesByCode, allCods) => {
   const validCods = allCods.lenght > 0 ?  [... new Set([...valutesByCode, ...allCods])] : [];
   return validCods.map(code => favouriteValutes[code]);
  }
);