export const ADD_TODO = "ADD_TODO";
export const DELETE_TODO = "DELETE_TODO";
export const DELETE_ALL = "DELETE_ALL";
export const DELETE_SELECTED = "DELETE_SELECTED";
export const TOGGLE_TODO = "TOGGLE_TODO";


export const addTodo = todoObj => {
    return {
        type: ADD_TODO,
        payload: todoObj
    }
}

export const deleteTodo = todoId => {
    return {
        type: DELETE_TODO,
        payload: todoId
    }
}

export const deleteAll = () => {
    return {
        type: DELETE_ALL
    }
}

export const deleteSelected = () => {
    return {
        type: DELETE_SELECTED
    }
}

export const toggleTodo = todoId => {
    return {
        type: TOGGLE_TODO,
        payload: todoId
    }
}