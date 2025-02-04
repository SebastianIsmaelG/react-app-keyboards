import { useState } from "react";

 const ComponenteUsuario = () =>{

    //const [variableActualizada,setVariableActualizada] = useState(Define el valor inicial);
    const [numero,setNumero] = useState(0);

    const sumar = () =>{
      setNumero(numero+1);
      
    }


    return (
      <div>
        <h1>Numero: {numero}</h1>
        <button onClick={sumar}>Sumar</button>
      </div>
    );
};
export default ComponenteUsuario;