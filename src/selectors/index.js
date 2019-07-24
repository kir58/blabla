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
  currentCountry: 'AUD',
  convertCountry: 'AZN',
}
const getFormValues = state => state.form.CurrentForm ? state.form.CurrentForm.values : defaultValues
export const getConvertValute = createSelector(
  getValutesByCode,
  getFormValues,
  (valutesByCode, values) => {
    const { currentCountry, currentValute, convertCountry } = values;
    const valueCurrentValute = valutesByCode[currentCountry] ? valutesByCode[currentCountry].Value : 1;
    const valueConvertValute = valutesByCode[convertCountry] ? valutesByCode[convertCountry].Value : 1;
    const currentMult = valueCurrentValute * currentValute;
    return valueConvertValute / currentMult;
  }
)
