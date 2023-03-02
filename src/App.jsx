import { useState } from "react";

function App() {
  //let Contador = 0;
  const [Contador, setContador] = useState(0)
  
  const Incremento = () => {
    setContador(Contador+1);
  }

  const Restablecer = () => {
    setContador(0);
  }

  const Decremento = () => {
    setContador(Contador-1);
  }
 
  return (
    <div>
      <h3>Contador</h3>
      <hr />
      <h1>{Contador}</h1>
      <button onClick = {
        Incremento
      }
      type="button" 
      className="btn btn-primary"
      >+1</button>
      
      < button onClick = {
        Restablecer
      }
      type="button" 
      className="btn btn-secondary"
      >Restablecer</button>

      < button onClick = {
        Decremento
      }
      type="button" 
      className="btn btn-success"
      >-1</button>
    </div>
  )
}

export default App