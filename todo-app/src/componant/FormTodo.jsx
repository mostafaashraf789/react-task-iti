import React from 'react'
import { v4 as uuidv4 } from 'uuid';
const FormTodo =({input,setinput,todos,setTodos,setEdit,edit, editIndex,seteditIndex}) => {

const inputChange = (e) => {
    setinput(e.target.value)
  }

 
  
const formSubmit = (e) => { 
  e.preventDefault();
    if (input.trim() !== "") {
if (editIndex !== null) {
  const updatedTodos = [...todos]
  updatedTodos[editIndex] = {...updatedTodos[editIndex],title:input}
  console.log(updatedTodos[editIndex]);
  
  setTodos(updatedTodos)
  seteditIndex(null)
  setEdit(false);
}else{
   
  let date = new Date().toDateString()
  setTodos([...todos,{title:input,id:uuidv4(),completed:false,date: date}])
}
setinput("")
    }
    

 }


  return (
    <div>
        
        <form  onSubmit={formSubmit}>
    <input 
     type="text" 
     placeholder='Enter a Todo...' 
     className='task-input'
     onChange={inputChange}
     value={input}
     />
    <button type='submit' className='button-add'>{edit?"edit":"add"}</button>
       </form>

</div>
  )
}

export default FormTodo