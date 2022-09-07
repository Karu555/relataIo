import React from 'react'

const Warning = ({handlePrice,price,show}) => {
  const handleClick=()=>{
    handlePrice()
  }
  return (
    <>
    {show && <div onClick={handleClick} className={price == 150  ?"warning":"warning2"}>
    &#9888;
</div>}
</>
    
  )
}

export default Warning