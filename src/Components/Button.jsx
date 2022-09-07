import React from 'react'

const Button = ({price}) => {
  return (
    <div>
        <button  disabled={price == 150?false:true} onClick={()=>console.log("hello")} className={price==150?"button":"button2"}>Apply Discount</button>
    </div>
  )
}

export default Button