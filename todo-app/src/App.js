import React from 'react'
import Header from './componant/Header';
import "./App.css"
import FormTodo from './componant/FormTodo';
import { useState } from 'react';
import TodoList from './componant/TodoList';
const App = () => {
  
  const [input, setinput] = useState("");
  const [todos, setTodos] = useState([]);
  const [edit,setEdit] = useState(0)
  const [editIndex, seteditIndex] = useState(null)
  return (
  <div className='container'>
    <div className='app-wrapper'>
      <Header/>
      <FormTodo
      input={input}
      setinput={setinput}
      todos={todos}
      setTodos={setTodos}
      edit={edit}
      setEdit={setEdit}
      editIndex={editIndex}
      seteditIndex={seteditIndex}
      />
      <TodoList
      todos={todos}
      setTodos={setTodos}
      input={input}
      setinput={setinput}
      setEdit={setEdit}
      editIndex={editIndex}
      seteditIndex={seteditIndex}
      />
    </div>

  </div>
  
)
};

export default App;