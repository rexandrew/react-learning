import React from 'react';
import Todo from './Todo';

export default function ({ todos, handleTogleTodoClick }) {
    return (
        todos.map(todo => {
            return < Todo key={todo.id} todo={todo} handleTogleTodoClick={handleTogleTodoClick} />
        })
    )
}