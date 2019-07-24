import { createSelector } from "reselect";

export const getFavouriteValutes = state => state.valutes.favouriteValutes
const getValutesByCode = state => state.valutes.valutesByCode
export const getAllCods = state => state.valutes.allCods


export const getAllValutes = createSelector(
  getFavouriteValutes,
  getValutesByCode,
  getAllCods,
  (favouriteValutes, valutesByCode, allCods) => {
   const validCods = allCods.length !== 0 ?  [... new Set(favouriteValutes.concat(allCods))] : [];
   return validCods.map(code => valutesByCode[code]);
  }
);
const defaultValues = {
  currentValute: 1,
  currentCountry: 'RUB',
  convertCountry: 'USD',
}
const getFormValues = state => state.form.CurrentForm ? state.form.CurrentForm.values : defaultValues
export const getConvertValute = createSelector(
  getValutesByCode,
  getFormValues,
  (valutesByCode, values) => {
    const { currentCountry, currentValute, convertCountry } = values;
    const valueCurrentValute = valutesByCode[currentCountry] 
      ? valutesByCode[currentCountry].Value / valutesByCode[currentCountry].Nominal : 1;
    const valueConvertValute = valutesByCode[convertCountry]
      ? valutesByCode[convertCountry].Value / valutesByCode[convertCountry].Nominal : 1;
    const currentMult = valueCurrentValute * currentValute;
    return valueConvertValute / currentMult;
  }
);

export const getCurrentList =  createSelector(
  getAllCods,
  getFormValues,
  (allCods, values) => {
    return allCods.filter(code => code !== values.convertCountry);
  } 
);

export const getConvertList =  createSelector(
  getAllCods,
  getFormValues,
  (allCods, values) => {
    return allCods.filter(code => code !== values.currentCountry);
  } 
);