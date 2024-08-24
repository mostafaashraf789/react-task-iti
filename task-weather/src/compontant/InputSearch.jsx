
import React, { forwardRef, useImperativeHandle, useRef, useState } from 'react'

const  InputSearch = forwardRef( (props,ref) => {

const inputRef = useRef()

useImperativeHandle(ref,() => ({ 
    searchInput : () => { return inputRef.current.value }
 }))



  return (
    <div className="input-container">
   <input type="text" ref={inputRef}  placeholder='Search...' />
</div>
  )
})

export default InputSearch