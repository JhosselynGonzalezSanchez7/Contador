import { useState } from "react";


function App() {
  //let contador = 0;
  const [contador, setContador] = useState(0)
  
  return (
    <div>
    <h3>Contador</h3>
    <hr />
    <h1>{contador}</h1>
    <button 
    onClick={()=>{
      setContador(contador + 1);
      console.log (contador)
    }}
    type = "button" 
    className="btn btn-primary"
    >+1</button>
    </div>
  )
}

export default App
