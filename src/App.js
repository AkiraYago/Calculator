import './App.css';
import { Button, CleanButton } from './components/Button';
import Screen from './components/Screen';
import { useState } from 'react';
import { evaluate } from 'mathjs';

function App() {
  const [input, setInput] = useState("");

  const addInput = (val) => {
    const lastChar = input.slice(-1);
    const operators = ["+", "-", "*", "/"];

    if (!operators.includes(val) || !operators.includes(lastChar)) {
      setInput(input + val);
    } else if (val !== lastChar) {
      setInput(input.replace(lastChar, val));
    }
  };

  const calcularResultado = () => {
    const operatorsRegex = /[+\-*/]/g;
    const numbersRegex = /\d+(\.\d+)?/g;
    const operators = input.match(operatorsRegex) || [];
    const numbers = input.match(numbersRegex) || [];

    if (!input) {
      alert("Ingrese un número.");
    } else if (numbers.length <= 1 || operators.length !== numbers.length - 1) {
      alert("Entrada incorrecta");
    } else {
      try {
        const result = evaluate(input); // Utilizar eval solo si el input es seguro
        setInput(result);
      } catch (error) {
        alert("Error al calcular el resultado");
      }
    }
  };

  // const addInput = (val) => {
  //   if (input[input.length - 1] == "+" || input[input.length - 1] == "-" || input[input.length - 1] == "*" || input[input.length - 1] == "/") {
  //     if (val == input[input.length - 1]) {
  //     } else if (val == "+" || val == "-" || val == "*" || val == "/") {
  //       setInput(input.replace(input[input.length - 1], val));
  //     } else {
  //       setInput(input + val);
  //     }
  //   } else {
  //     setInput(input + val);
  //   }
  // };

  // const calcularResultado = () => {
  //   let contadorOperadores = 0;
  //   let contadorNumeros = 0;
  //   for (let i = 0; i < input.length; i++) {
  //     switch (input[i]) {
  //       case "+": contadorOperadores++;
  //         break;
  //       case "-": contadorOperadores++;
  //         break;
  //       case "*": contadorOperadores++;
  //         break;
  //       case "/": contadorOperadores++;
  //         break;
  //     }
  //     for (let e = 0; e < 10; e++) {
  //       if (input[i] == e) {
  //         contadorNumeros++;
  //       }
  //     }
  //   }
  //   if (input[0] == "+" || input[0] == "-" || input[0] == "*" || input[0] == "/") {
  //     console.log("Primer caracter es operador");
  //     contadorOperadores--;
  //   }
  //   console.log("Cantidad de Operadores: " + contadorOperadores);
  //   console.log("Cantidad de Numeros: " + contadorNumeros);
    
  //   if (!input) {
  //     alert("Ingrese un número.");
      
  //   } else if (contadorNumeros <= 1) {
  //     //alert("Solo hay un numero");
  //     setInput(input);
  //   } else {
  //     if (input) {
  //       setInput(evaluate(input));
  //     }
  //   }
  //   console.log(input);
  // };

  return (
    <div className="App">
      <div className="contenedor-calculadora">
        <Screen
          input={input} />
        <div className="fila">
          <Button manejarClick={addInput}>7</Button>
          <Button manejarClick={addInput}>8</Button>
          <Button manejarClick={addInput}>9</Button>
          <Button manejarClick={addInput}>/</Button>
        </div>
        <div className="fila">
          <Button manejarClick={addInput}>4</Button>
          <Button manejarClick={addInput}>5</Button>
          <Button manejarClick={addInput}>6</Button>
          <Button manejarClick={addInput}>*</Button>
        </div>
        <div className="fila">
          <Button manejarClick={addInput}>1</Button>
          <Button manejarClick={addInput}>2</Button>
          <Button manejarClick={addInput}>3</Button>
          <Button manejarClick={addInput}>-</Button>
        </div>
        <div className="fila">
          <CleanButton manejarCleanClick={() => setInput("")}>C</CleanButton>
          <Button manejarClick={addInput}>0</Button>
          <Button manejarClick={addInput}>.</Button>
          <Button manejarClick={addInput}>+</Button>
        </div>
        <div className="fila">
          <Button manejarClick={calcularResultado}>=</Button>
        </div>
      </div>
    </div>
  );
}

export default App;
