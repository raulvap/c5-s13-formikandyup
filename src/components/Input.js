import React from "react";
import styled from "styled-components";
import { useField } from "formik";

// Clase 116: creando un custom input:
const Control = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  color: #000;
  display: block;
  margin-bottom: 5px;
`;

const MyInput = styled.input`
  outline: none;
  padding: 8px;
  border: 1px solid #b1b3b5;
  border-radius: 4px;
  width: 100%;
  margin-bottom: 5px;
`;

const ErrorMessage = styled.div`
  color: #f00;
`;

const Input = ({ label, ...otherProps }) => {
  // Clase 116: usamos el hook de useField para sacar las propiedades de field y meta
  //   y poder utilizarlas para mostrar el error
  const [field, meta] = useField(otherProps);

  return (
    <Control>
      <Label>{label} </Label>
      <MyInput {...field} {...otherProps} />

      {/* Agregamos las validaciones: */}
      {meta.touched && meta.error ? (
        <ErrorMessage>{meta.error} </ErrorMessage>
      ) : null}
    </Control>
  );
};

export default Input;
