import React from 'react';
import uuid from "uuid";
import {connect} from "react-redux";

import Todo from './TodoItem';
import TodoForm from './TodoForm';
import {toggleTodo, addTodo, deleteTodo, deleteAll, deleteSelected } from "../actions";

import './Todo.scss';

class TodoList extends React.Component {
    constructor() {
        super();
        this.state = {
            input: "",
        }
            
    }

    // Updates state.input whenver we type in the form
    handleChanges = (e) => {
        this.setState ({
            [e.target.name]: e.target.value
        });
    }


    addTodo = (e) => {
        e.preventDefault();
        this.props.addTodo({id: uuid.v4(), task: this.state.input, completed: false});
        this.setState({input: ""});
    }

    toggleComplete = id => {
        this.props.toggleTodo(id);
    }

    clearItem = id => {
        this.props.deleteTodo(id)
    }

    clearCompleted = (e) => {
        e.preventDefault();
        this.props.deleteSelected();
    }

    clearAll = (e) => {
        e.preventDefault();
        this.props.deleteAll();
    }

    render() {
        return(
            <div className="container">
                <ul>
                    {this.props.todos.map((todoEachObj, i) => {
                        return <Todo 
                            todoItemObj={todoEachObj} 
                            key={todoEachObj.id}
                            id={i}
                            onClick={this.toggleComplete}
                            clearItem={this.clearItem}
                        />
                    })}
                </ul>
                <TodoForm 
                    inputChange={this.handleChanges} 
                    addTodo={this.addTodo} 
                    clearAll={this.clearAll} 
                    clear={this.clearCompleted}
                    value={this.state.input} 
                    onSearch={this.searchList}
                    name="input"
                />

            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        todos: state.todos
    }
}

export default connect(mapStateToProps, {toggleTodo, addTodo, deleteTodo, deleteAll, deleteSelected })(TodoList);