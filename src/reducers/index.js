import { combineReducers } from "redux";
import tasks from "./Tasks"

const myReducer = combineReducers({
    tasks // tasks : tasks
});

export default myReducer;
