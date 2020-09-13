import * as types from "./../constants/ActionTypes";

export const listAll = () => {
    return {
        type: types.LIST_ALL
    }
}
export const addTask = (task) => {
    return {
        type: types.ADD_TASK,
        task //task:task
    }
}

export const deleteTask = (id) => {
    return {
        type: types.DELETE_TASK,
        id //task:task
    }
}