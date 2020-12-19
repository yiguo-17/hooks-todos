import React,{ useState } from 'react';
import { v4 as uuidv4 } from "uuid";


const Input = ({addTodo}) => {
    const[todo, setTodo] = useState({
        id:"",
        task:"",
        isCompleted: false,
    }) ;
    function handleTaskInputChange(e) {
        setTodo({...todo, task:e.target.value});
    }
    function handleSubmit(e) {
        e.preventDefault();
        if(todo.task!== null){
            addTodo({...todo, id:uuidv4()});
            setTodo({...todo,task:""});

        }
    }
    return (
       <form onSubmit = {handleSubmit}>
           <input placeholder = "add new todo..."
           name="task"
           type= "text"
           value = {todo.task}
           onChange = {handleTaskInputChange}
           />
           <button>Submit</button>
       </form>
    )
}

export default Input
