import { ADD_TODO, DELETE_TODO, TOGGLE_TODO } from "../actions";

const initialState = {
    todos: [
        {
            id: 0,
            task: "Walk the dog",
            completed: false
        },
        {
            id: 1,
            task: "Take out the trash",
            completed: false
        }
    ]
}

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            return state = { todos: [...state.todos, action.payload] };
        case DELETE_TODO:
            return state = { todos: state.todos.filter(todoObj => todoObj.id !== action.payload) };
        default:
            return state;
    }
}