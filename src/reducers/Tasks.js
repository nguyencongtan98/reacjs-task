import * as types from "./../constants/ActionTypes";

var data = JSON.parse(localStorage.getItem("tasks"));
var initialState = data ? data : [{ id: 1, name: "Cong Tan", status: true }];

var findIndex = (tasks, id) => {
  var result = -1;
  tasks.forEach((task, index) => {
    if (task.id === id) {
      result = index;
    }
  });
  return result;
};

var myReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LIST_ALL:
      return state;
    case types.ADD_TASK:
      var newTask = {
        id: action.task.id,
        name: action.task.name,
        status: action.task.status === "true" ? true : false,
      };
      state.push(newTask);
      localStorage.setItem("tasks", JSON.stringify(state));
      return [...state];
    case types.DELETE_TASK:
      var id = action.id;
      var index = findIndex(state, id);
      state.splice(index, 1);
      localStorage.setItem("tasks", JSON.stringify(state));
      return [...state];
    default:
      return state;
  }
};

export default myReducer;
