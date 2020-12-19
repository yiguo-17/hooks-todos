import React from 'react'

const Todo = ({todo, completeTodoById,deleteTodoById}) => {
    function handleCheckbox() {
        completeTodoById(todo.id);
    }

    function handleDelete() {
        deleteTodoById(todo.id)
    }
    return (
        <div style = {{display:"flex",textAlign:'center' }}>
            <input type="checkbox" onClick= {handleCheckbox} />
            <li
            style={{
                textDecorationLine: todo.isCompleted? "line-through" :null
            }}
            >{todo.task}</li>
            <button onClick = {handleDelete}>delete</button>
        </div>
    )
}

export default Todo
