import React from 'react';
import { useState } from 'react';
 

const Input = ({price,handleInput}) => {
  const [data, setData] = useState("");
const handleChange = (e) => {
  setData(e.target.value)
}
const handleclick=()=>{
  handleInput()
}
  return (
    <div className='inputcomponent'>
        <span className='rupee'>&#8377;</span>
        <span><input  onClick={handleclick} type="text"  className='input' value={price} onChange={handleChange}/></span>
        
      
    </div>
  )
}

export default Input