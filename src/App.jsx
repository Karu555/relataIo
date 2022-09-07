import { useState } from "react";
import Dropdown from "./Components/Dropdown";
import Input from "./Components/Input";
import Popup from "./Components/Popup";

function App() {
  const [show,setShow] =useState(true);
  function handleShow(){
    setShow(false);
    
  }
  return (
    <div>
      {show&&<Popup handleShow={handleShow}/>}
      {!show&&<button onClick={()=>setShow(true)}>show</button>}
       
    </div>
  );
}

export default App;
