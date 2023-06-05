import React from "react";
import "../style-sheets/Button.css";
//props.children hara que se muestre el valor que se le ponga entre <Button> y <Button/> de App.js

export const Button = (props) => {
  const esOperdaor = valor => {
    return isNaN(valor) && (valor != ".") && (valor != "=");
  }

  return (
    <div
      className={`boton-contenedor ${esOperdaor(props.children) ? "operador" : null}`.trimEnd()}
      onClick={() => props.manejarClick(props.children)}>
      {props.children}
    </div>
  )
};

export const CleanButton = (props) => {
  return (
    <div
      className="boton-contenedor"
      onClick={props.manejarCleanClick}>
      {props.children}
    </div>
  )
};