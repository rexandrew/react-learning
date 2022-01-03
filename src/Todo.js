import React from 'react';

export default function Todo({ todo, handleTogleTodoClick }) {

    function handleToggle() {
        handleTogleTodoClick(todo.id);        
    }

    return (
        <div>
            <input type="checkbox" onChange={handleToggle} />
            <label>{todo.name} </label>
        </div>
    )

}