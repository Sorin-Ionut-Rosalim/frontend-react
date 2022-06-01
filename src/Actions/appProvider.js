// import * as todoActions from "./todo.actions";
import * as eventActions from "./event.actions";

export const appProviderActions = (dispatch) => {
  return {
    // getAllTodos: () => todoActions.getAllTodos(dispatch),
    // addTodo: (body) => todoActions.addTodo(dispatch, body),
    // removeTodo: (id) => todoActions.removeTodo(dispatch, id),
    setError: (error) => eventActions.setError(dispatch, error),
    getAllEvents: () => eventActions.getAllEvents(dispatch),
    addEvent: (body) => eventActions.addEvent(dispatch, body),
    removeEvent: (id) => eventActions.removeEvent(dispatch, id),
    selectEvent: (id) => eventActions.selectEvent(dispatch, id),
    setFilter: (filter) => eventActions.setFilter(dispatch, filter),
    addPlayer: (payload) => eventActions.addPlayer(dispatch, payload),
  };
};
