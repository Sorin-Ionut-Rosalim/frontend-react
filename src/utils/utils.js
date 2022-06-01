import { merge } from "lodash";

export const updateObject = (oldObject, updatedValues) =>
  merge({}, oldObject, updatedValues);

export const pushMessage = (state, message, type) => {
  // alert(message)
  return state;
};
