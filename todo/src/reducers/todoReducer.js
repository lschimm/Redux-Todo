import { UPDATE_TODO } from "../actions";

const initialState = {
  title: "To-Do List"
};

export function todoReducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_TODO:
      return {
        ...state,
        title: action.payload
      };
    default:
      return state;
  }
}
