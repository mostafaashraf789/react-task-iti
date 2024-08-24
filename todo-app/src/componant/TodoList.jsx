import React from 'react'

const  TodoList = ({todos,setTodos,setinput,setEdit,seteditIndex})=> {

const handleDelete = (id) => { 

setTodos(todos.filter((todo) => todo.id !== id))
 }


const handleCompleted = (id) => { 
setTodos(todos.map((todo) => {

if (todo.id === id) {
  return {...todo ,completed: !todo.completed}
}
else{
  return todo ;
}
  }))
 }

const handleShowEditInInput = (id,index) => { 
const edit = todos.find((todo) =>  todo.id === id )
setinput(edit.title)
setEdit(true)

  seteditIndex(index)

 }




  return (
    <div>
{todos.map((todo,index) => 
   (
      <li className='list-item' key={todo.id}>
         <input type="text" value={todo.title} className={`list ${todo.completed ? 'complete':''}`}  readOnly/>
<div >

    <button className='button-complete' onClick={() => handleCompleted(todo.id)}>
        <i className='fa fa-check-circle'></i>
    </button>

    <button className='button-edit' onClick={() => { handleShowEditInInput(todo.id,index) }}>
    <i className="fa-solid fa-pen-to-square"></i>
    </button>


    <button className='button-delete' onClick={() => { handleDelete(todo.id) }}>
    <i className="fa-solid fa-trash-can"></i>
    </button>
</div>
      </li>    
    )

)}


    </div>
  )
}

export default TodoList