import React from 'react'



const Todo = (props) => {

    // If the list item is considered complete, then we add an extra class called 'complete'
    const classSet = (props.todoItemObj.completed) ? "todoItem complete" : "todoItem";

    const toggle = e => {
        e.preventDefault();
        e.stopPropagation();
        props.onClick(props.id)
    }

    const clear = e => {
        e.preventDefault();
        e.stopPropagation();
        props.clearItem(props.id)
    }


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
