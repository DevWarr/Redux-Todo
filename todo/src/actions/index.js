export const ADD_TODO = "ADD_TODO";
export const DELETE_TODO = "DELETE_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";


export const addTodo = todoObj => {
    return {
        type: ADD_TODO,
        payload: todoObj
    };
}

export const deleteTodo = todoId => {
    return {
        type: DELETE_TODO,
        payload: todoId
    };
}