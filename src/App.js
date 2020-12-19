import React, {useState,useEffect} from "react";
import Input from "./components/Input";
import Todos from "./components/Todos";
import './App.css';

const LOCAL_STORAGE_KEY = "react-todos";
function App() {

  const [todos, setTodos] = useState([]);
  useEffect(()=>{
    const storageTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if(storageTodos){setTodos(storageTodos)}
  },[]);
  useEffect(()=>{
    localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(todos));
  },[todos]);


  function addTodo(todo) {
    setTodos([...todos,todo]);
  }

  function completeTodoById(id) {
    setTodos(
      todos.map(todo=>{
        if(todo.id === id){
          return{...todo, isCompleted: !todo.isCompleted}
        }
        return todo
      })
    )
  }

  function deleteTodoById(id) {
    setTodos(todos.filter(todo => todo.id !== id));
    
  }

  return (
    <div className="App">
  <h1>Todo</h1>
  <Input addTodo={addTodo}/>
  <Todos todos={todos} completeTodoById={completeTodoById} deleteTodoById = {deleteTodoById}/>
  
    </div>
  );
}

export default App;
