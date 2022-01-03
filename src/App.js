import React, { useState, useRef, useEffect } from 'react'
import TodoList from './TodoList'
// import { V4 } from 'uuid'


const { v4: uuidv4 } = require('uuid');

const LOCAL_STOGAGE_KEY = 'todo.storage.key';
export default function App() {
    const todovalue = useRef();
    const [todos, setTodo] = useState([]);

    //handle add todo
    function handleAddTodoClick(e) {
        const name = todovalue.current.value;
        todovalue.current.value = null;
        console.log(name);
        if (name === '') return
        setTodo(previousState => { return [...previousState, { id: uuidv4(), name: name, complete: false }] });
    }

    //handle toggle todo
    function handleTogleTodoClick(id) {
        console.log(id);
        const newTodos = [...todos];
        const newTodo = newTodos.find(todo => { return todo.id === id });
        newTodo.complete = !newTodo.complete;
        setTodo(newTodos);
    }

    //Handle clear completed todo
    function handleClearTodoClick() {
        const newTodos = todos.filter(todo => !todo.complete);
        setTodo(newTodos);
    }

    //handle get from local cache
    useEffect(() => {
        setTodo(JSON.parse(localStorage.getItem(LOCAL_STOGAGE_KEY)));
    }, []);

    //handle save state to local cache
    useEffect(() => {
        localStorage.setItem(LOCAL_STOGAGE_KEY, JSON.stringify(todos));
    }, [todos]);

    return (
        <React.Fragment>
            <TodoList todos={todos} handleTogleTodoClick={handleTogleTodoClick} />
            <input ref={todovalue} type="text" />
            <button onClick={handleAddTodoClick}>Add todo</button>
            <button onClick={handleClearTodoClick}>Clear Completed Todo</button>
            <div>{todos.filter(todo => { return !todo.complete }).length} items to do</div>
        </React.Fragment>
    )
}