import React from 'react'



const Todo = (props) => {

    // If the list item is considered complete, then we add an extra class called 'complete'
    const classSet = (props.todoItemObj.completed) ? "todoItem complete" : "todoItem";

    const toggle = e => {
        e.preventDefault();
        e.stopPropagation();
        props.onClick(props.todoItemObj.id)
    }

    const clear = e => {
        e.preventDefault();
        e.stopPropagation();
        props.clearItem(props.todoItemObj.id)
    }
    console.log(props.todoItemObj);

    return (
        <li 
            className={classSet} 
            onClick={toggle}
            id={props.id}
        >
            {props.todoItemObj.task}
            <span onClick={clear} >Delete</span>
        </li>
    );
}

export default Todo;
