import { useState } from "react";
import styled from "styled-components";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import ContainerComponent from "./components/Container";
import Section from "./components/Section";
import Input from "./components/Input";
import Button from "./components/Button";
import Balance from "./components/Balance";

function App() {
  const [balance, setBalance] = useState("");

  const handleSubmit = ({ deposit, contribution, years, rate }) => {
    // estos valores llegan como texto, por lo que debemos convertirlos a número:
    const val = compoundInterest(
      Number(deposit),
      Number(contribution),
      Number(years),
      Number(rate)
    );

    setBalance(formatter.format(val));

    console.log("resultado:", val);
  };

  return (
    <ContainerComponent>
      <Section>
        <Formik
          initialValues={{
            deposit: "",
            contribution: "",
            years: "",
            rate: "",
          }}
          onSubmit={handleSubmit}
          // Clase 120: Para la validación de datos, usamos Yup
          validationSchema={Yup.object({
            deposit: Yup.number()
              .required("Se necesita un número")
              .typeError("Debe ser un número"),
            contribution: Yup.number()
              .required("Se necesita un número")
              .typeError("Debe ser un número"),
            years: Yup.number()
              .required("Se necesita un número")
              .typeError("Debe ser un número"),
            rate: Yup.number()
              .required("Se necesita un número")
              .typeError("Debe ser un número")
              .min(0, "El valor mínimo es 0")
              .max(1, "El valor máximo es 1"),
          })}
        >
          <Form>
            <Input
              name="deposit"
              label="Deposito inicial"
              placeholder="Ingrese un monto inicial"
            />
            <Input
              name="contribution"
              label="Contribución Anual"
              placeholder="Ingrese una cantidad"
            />
            <Input
              name="years"
              label="Años de Inversión"
              placeholder="Ingrese los años a invertir"
            />
            <Input name="rate" label="Tasa de Interés" placeholder="0.00%" />
            <Button>Calcular</Button>
          </Form>
        </Formik>
        {balance !== "" ? (
          <Balance> Total estimado de la inversión: {balance}</Balance>
        ) : null}
      </Section>
    </ContainerComponent>
  );
}

const compoundInterest = (deposit, contribution, years, rate) => {
  // clase 118: calculando el interés compuesto
  let total = deposit;

  for (let i = 0; i < years; i++) {
    total = (total + contribution) * (rate + 1);
  }

  return Math.round(total);
};

// Clase 119: Para formatear el número a USD:
const formatter = new Intl.NumberFormat("es-MX", {
  style: "currency",
  currency: "MXN",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

export default App;
