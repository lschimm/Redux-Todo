export const UPDATE_TODO = "UPDATE_TODO";
export function updateTodo(newTodo) {
  console.log("action", newTodo);
  return {
    type: UPDATE_TODO,
    payload: newTodo
  };
}

export const ADD_NEW_TODO = "ADD_NEW_TODO";
export const addNewTodo = newTodo => {
  console.log(newTodo);
  return {
    type: ADD_NEW_TODO,
    payload: newTodo
  };
};

export const TOGGLE_TODO = "TOGGLE_TODO";
export const toggleTodo = index => {
  console.log(index);
  return {
    type: TOGGLE_TODO,
    payload: index
  };
};
