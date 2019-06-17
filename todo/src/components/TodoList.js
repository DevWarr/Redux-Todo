// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from './Todo';
import TodoForm from './TodoForm';
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
        
    }

    toggleComplete = (e) => {
        
    }

    clearCompleted = (e) => {
        e.preventDefault();
        
    }

    clearCompleted = (e) => {
        e.preventDefault();
        
    }

    clearAll = (e) => {
        e.preventDefault();
        
    }



    render() {
        return(
            <div className="container">
                <ul>
                    {this.state.todoList.map((todoEachObj, i) => {
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

export default