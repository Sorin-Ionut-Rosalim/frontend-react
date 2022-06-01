import {
  ADD_EVENT_SUCCESS,
  ADD_EVENT_ERROR,
  GET_ALL_EVENTS_ERROR,
  GET_ALL_EVENTS_SUCCESS,
  APPLICATION_ERROR,
  REMOVE_EVENT_SUCCESS,
  REMOVE_EVENT_ERROR,
  SELECT_ID_SUCCESS,
  FILTER_SUCCESS,
  ADD_PLAYER_SUCCESS,
  ADD_PLAYER_ERROR,
  SET_ERROR,
} from "../Actions/event.types";
import { BACKEND_URL } from "../utils/constants";
import { applicationJson } from "../utils/constants";
export const setError = async (dispatch, error) => {
  return dispatch({
    type: SET_ERROR,
    payload: error,
  });
};
export const addPlayer = async (dispatch, payload) => {
  try {
    console.log(
      "🚀 ~ file: event.actions.js ~ line 18 ~ addPlayer ~ payload",
      payload
    );
    const reqBody = { playerEmail: payload.playerEmail };

    console.log(
      "🚀 ~ file: event.actions.js ~ line 25 ~ addPlayer ~ reqBody",
      reqBody
    );
    const response = await fetch(
      `${BACKEND_URL}/event/${payload.eventID}/addPlayer`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": applicationJson,
          Accept: applicationJson,
        },
        body: JSON.stringify(reqBody),
      }
    );
    const data = await response.json();
    console.log(
      "🚀 ~ file: event.actions.js ~ line 31 ~ addPlayer ~ data",
      data
    );
    if (!response.ok) {
      dispatch({
        type: ADD_PLAYER_ERROR,
        payload: data.detail,
      });
    }
    dispatch({
      type: ADD_PLAYER_SUCCESS,
      payload: data,
    });
  } catch (error) {
    console.log(
      "🚀 ~ file: event.actions.js ~ line 43 ~ addPlayer ~ error",
      error
    );
    dispatch({
      type: ADD_PLAYER_ERROR,
      payload: `Failed to add player to event with ${payload.eventID}`,
    });
  }
};

export const setFilter = async (dispatch, filter) => {
  return dispatch({
    type: FILTER_SUCCESS,
    payload: filter,
  });
};

export const addEvent = async (dispatch, body) => {
  try {
    console.log(
      "🚀 ~ file: event.actions.js ~ line 17 ~ addEvent ~ body",
      JSON.stringify(body)
    );
    const response = await fetch(`${BACKEND_URL}/event`, {
      method: "POST",
      headers: {
        "Content-Type": applicationJson,
        Accept: applicationJson,
      },
      body: JSON.stringify(body),
    });

    const data = await response.json();
    if (!response.ok) {
      return dispatch({
        type: ADD_EVENT_ERROR,
        payload: data,
      });
    }

    dispatch({ type: ADD_EVENT_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: APPLICATION_ERROR, payload: error });
  }
};

export const getAllEvents = async (dispatch) => {
  try {
    const response = await fetch(`${BACKEND_URL}/event`, {
      method: "GET",
      headers: {
        "Content-Type": applicationJson,
        Accept: applicationJson,
      },
    });

    const data = await response.json();
    if (!response.ok) {
      return dispatch({
        type: GET_ALL_EVENTS_ERROR,
        payload: data,
      });
    }

    dispatch({ type: GET_ALL_EVENTS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: APPLICATION_ERROR, payload: error });
  }
};

export const removeEvent = async (dispatch, id) => {
  try {
    const response = await fetch(`${BACKEND_URL}/event/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": applicationJson,
        Accept: applicationJson,
      },
    });
    const data = await response.json();
    if (!response.ok) {
      return dispatch({
        type: REMOVE_EVENT_ERROR,
        payload: data,
      });
    }

    dispatch({ type: REMOVE_EVENT_SUCCESS, payload: id });
  } catch (error) {
    dispatch({ type: APPLICATION_ERROR, payload: error });
  }
};

export const selectEvent = async (dispatch, id) => {
  return dispatch({
    type: SELECT_ID_SUCCESS,
    payload: id,
  });
};
