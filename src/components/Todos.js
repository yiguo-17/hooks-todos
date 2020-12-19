import React from 'react';
import Todo from "./Todo";

const Todos = ({todos,completeTodoById,deleteTodoById}) => {
    return (
        <ul>
            {todos.map(todo=>(
                <Todo key={todo.id} todo={todo} completeTodoById={completeTodoById} deleteTodoById= {deleteTodoById} />
            ))}
        </ul>
    )
}

export default Todos
