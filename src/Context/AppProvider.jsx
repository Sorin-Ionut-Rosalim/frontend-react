import React, { createContext, useEffect, useReducer } from "react";
import PropTypes from "prop-types";
import { appProviderReducer } from "../Reducers/appReducer";
import { appProviderActions } from "../Actions/appProvider";

export const AppProviderContext = createContext(null);

// initialState = { events: [], selectedID: []};
const initialState = {
  events: [],
  selectedID: "",
  filter: { text: "", sportType: "" },
  addPlayerError: "",
};

//
const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appProviderReducer, initialState);
  const actions = appProviderActions(dispatch);

  useEffect(() => {
    actions.getAllEvents();
  }, [actions]);
  //WARNING!!! be carefule
  return (
    <AppProviderContext.Provider
      value={{
        state,
        dispatch,
        actions,
      }}
    >
      {children}
    </AppProviderContext.Provider>
  );
};

AppProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default AppProvider;
