import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Input, InputLabel } from "@material-ui/core";
import { Link, withRouter } from "react-router-dom";
import * as ROUTES from "../../Routes/Routes.js";
import Navigation from "../NavBar/Navigation";
import "./Main.css";
import Select from "react-select";

function History(props) {
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];

  const MyComponent = () => <Select options={options} />;
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <div className="patient">
        <div
          style={{
            fontSize: 18,
            fontWeight: "bold",
            color: " rgb(83, 142, 194)",
            fontFamily: "Jost",
            marginLeft: "8.5vw",
            marginTop: "5vh",
          }}
        >
          Datos personales:
        </div>

        <div className="form">
          <div className="nombres1">
            Nombres:
            <input></input>
          </div>
          <div className="nombres2">
            Apellidos:
            <input></input>
          </div>
          <div className="nombres3">
            Documento de identidad (sin puntos):
            <input></input>
          </div>
        </div>

        <div className="form">
          <div className="nombres1">
            Sexo:
            <input></input>
          </div>
          <div className="nombres2">
            Fecha de Nacimiento:
            <input></input>
          </div>
          <div className="nombres3">
            Ocupación:
            <input></input>
          </div>
        </div>

        <div className="form">
          <div className="nombres1">
            País de Nacimiento:
            <input></input>
          </div>
          <div className="nombres2">
            Ciudad de Nacimiento:
            <input></input>
          </div>
          <div className="nombres3">
            Ciudad Actual:
            <input></input>
          </div>
        </div>

        <div className="form">
          <div className="nombres1">
            Dirección de Domicilio:
            <input></input>
          </div>
          <div className="nombres2">
            Teléfono / Celular:
            <input></input>
          </div>
        </div>
        <div
          style={{
            fontSize: 18,
            fontWeight: "bold",
            color: " rgb(83, 142, 194)",
            fontFamily: "Jost",
            marginLeft: "8.5vw",
            marginTop: "10vh",
            borderTop: 5,
            borderWidth: 10,
            borderTopColor: "red",
          }}
        >
          Antecedentes del paciente:
        </div>

        <div className="form">
          <div className="nombres1">
            Cirugias Anteriores:
            <input></input>
          </div>
          <div className="nombres2">
            Apellidos:
            <input></input>
          </div>
          <div className="nombres3">
            Teléfono / Celular:
            <input></input>
          </div>
        </div>

        <div
          style={{
            fontSize: 18,
            fontWeight: "bold",
            color: " rgb(83, 142, 194)",
            fontFamily: "Jost",
            marginLeft: "8.5vw",
            marginTop: "10vh",
            borderTop: 5,
            borderWidth: 10,
            borderTopColor: "red",
          }}
        >
          Datos de contacto:
        </div>

        <div className="form">
          <div className="nombres1">
            Nombres:
            <input></input>
          </div>
          <div className="nombres2">
            Apellidos:
            <input></input>
          </div>
          <div className="nombres3">
            Teléfono / Celular:
            <input></input>
          </div>
        </div>
      </div>
    </div>
  );
}

export default withRouter(History);
