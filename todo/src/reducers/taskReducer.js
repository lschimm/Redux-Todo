import { ADD_NEW_TODO, TOGGLE_TODO } from "../actions";

const initialState = {
  tasks: [
    { name: "Eat", taskStatus: true },
    { name: "Sleep", taskStatus: false }
  ]
};

export const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NEW_TODO:
      const newTask = { name: action.payload, taskStatus: false };
      return {
        tasks: [...state.tasks, newTask]
      };
    case TOGGLE_TODO:
      return {
        ...state,
        tasks: state.tasks.map((task, index) => {
          if (action.payload === index) {
            return {
              ...task,
              taskStatus: !task.taskStatus
            };
          } else {
            return task;
          }
        })
      };
    default:
      return state;
  }
};
