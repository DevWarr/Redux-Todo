import React from 'react'



const Todo = (props) => {

    // If the list item is considered complete, then we add an extra class called 'complete'
    const classSet = (props.todoItemObj.completed) ? "todoItem complete" : "todoItem";


    return (
        <li 
            className={classSet} 
            onClick={props.onClick}
            id={props.id}
        >
            {props.todoItemObj.task}
            <span onClick={props.clearItem} >Delete</span>
        </li>
    );
}

export default Todo;
