import { updateObject, pushMessage } from "../utils/utils";
import * as actionTypes from "../Actions/event.types";

export const appProviderReducer = (state, action) => {
  const { type, payload } = action;
  try {
    switch (type) {
      case actionTypes.FILTER_SUCCESS:
        return updateObject(state, { filter: payload });
      case actionTypes.ADD_EVENT_SUCCESS: {
        const newEvents = state.events.concat(payload);
        return updateObject(state, { events: newEvents });
      }
      case actionTypes.GET_ALL_EVENTS_SUCCESS:
        return updateObject(state, { events: payload });
      case actionTypes.REMOVE_EVENT_SUCCESS: {
        const newEvents = state?.events.filter((item) => item._id !== payload);
        return updateObject(state, {
          events: newEvents,
        });
      }
      case actionTypes.SET_ERROR:
        console.log(
          "🚀 ~ file: appReducer.js ~ line 46 ~ appProviderReducer ~ payload",
          payload
        );

        return updateObject(state, {
          addPlayerError: payload,
        });
      case actionTypes.ADD_PLAYER_SUCCESS:
        return updateObject(state, {
          ...state.events,
          payload,
        });
      case actionTypes.ADD_PLAYER_ERROR:
        console.log(
          "🚀 ~ file: appReducer.js ~ line 46 ~ appProviderReducer ~ payload",
          payload
        );

        return updateObject(state, {
          addPlayerError: payload,
        });
      case actionTypes.APPLICATION_ERROR:
      case actionTypes.ADD_EVENT_ERROR:
      case actionTypes.GET_ALL_EVENTS_ERROR:
      case actionTypes.REMOVE_EVENT_ERROR:
        pushMessage(state, payload, "error");
        return { ...state };

      case actionTypes.SELECT_ID_SUCCESS:
        return updateObject(state, { selectedID: payload });

      default:
        return state;
    }
  } catch (error) {
    console.log(
      "🚀 ~ file: appReducer.js ~ line 31 ~ appProviderReducer ~ error",
      error
    );
  }
};
