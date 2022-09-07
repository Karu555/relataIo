import React from 'react';
import { useState } from 'react';


const Delete = ({handleDelete,show}) => {
  const handleClick = ()=>{
    handleDelete()
  }
  return (<>
    {show&&<div className='delete' onClick={handleClick}><i class="fa-solid fa-trash-can"></i></div>
  }
  </>
    )
}

export default Delete