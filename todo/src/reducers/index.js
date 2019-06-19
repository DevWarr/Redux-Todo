import { ADD_TODO, DELETE_TODO, DELETE_ALL, DELETE_SELECTED, TOGGLE_TODO } from "../actions";

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
            return { todos: [...state.todos, action.payload] };

        case DELETE_TODO:
            console.log(action.payload)
            return { todos: state.todos.filter(todoObj => todoObj.id !== action.payload) };

        case DELETE_ALL:
            return { todos: [] }

        case DELETE_SELECTED:
            return { todos: state.todos.filter(todoObj => !todoObj.completed) };

        case TOGGLE_TODO:

            // Not mapping the state (un-ideal state change)
            // state.todos[action.payload].completed = !state.todos[action.payload].completed;
            // return { todos: [...state.todos]}

            // Mapping state (ideal state change)
            return {todos: state.todos.map(todoObj => {
                if (todoObj.id === action.payload) {
                    return {...todoObj, completed: !todoObj.completed}
                }
                return todoObj;
            })}

        default:
            return state;
    }
}