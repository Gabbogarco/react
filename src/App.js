
import './App.css';
import React from "react"
function Saludar(props) {
  return(
  <div>
    
  <h1>Bienvenido es el {props.numero} </h1>
    <p> Mensaje del componente {props.msg}</p>

</div>
  )
}
function App(){
  return (
<div>
<Saludar numero = "1" msg= "Hola Mundo" />
</div>
  );
}
export default App;
