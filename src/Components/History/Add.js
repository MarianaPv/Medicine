import React, { useState } from "react";
import { Input, InputLabel } from "@material-ui/core";
import { Link, withRouter } from "react-router-dom";
import * as ROUTES from "../../Routes/Routes.js";
import Navigation from "../NavBar/Navigation";
import "./Main.css";
import Select from "react-select";
import Axios from "axios";

function History(props) {
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];

  const [email, setEmail] = useState();
  const [displayName, setDisplayName] = useState("b");
  const [lastName, setLastName] = useState("a");
  const [password, setPassword] = useState();
  const [sex, setSex] = useState("c");
  const [bornDate, setBornDate] = useState("d");
  const [ocupation, setOcupation] = useState("e");
  const [country, setCountry] = useState("f");
  const [city, setCity] = useState("g");
  const [currentCity, setCurrentCity] = useState("h");
  const [address, setAddress] = useState("i");
  const [phone, setPhone] = useState("j");
  const [pastSurgery, setPastSurgery] = useState("k");
  const [contactName, setContactName] = useState("l");
  const [contactLastName, setContactLastName] = useState("m");
  const [contactPhone, setContactPhone] = useState("n");
  const [docuId, setDocuId] = useState();

  const sendInfo = async (e) => {
    e.preventDefault();
    const newUser = {
      email,
      password,
      passwordCheck: password,
      displayName,
      lastName,
      userName: email.substring(0, email.indexOf("@")),
      sex,
      bornDate,
      ocupation,
      country,
      city,
      currentCity,
      address,
      phone,
      pastSurgery,
      contactName,
      contactLastName,
      contactPhone,
      docuId: email,
    };
    const response = await Axios.post(
      //Este es mi punto de ref..
      "http://localhost:3001/userApps/register",
      newUser
    );
    console.log(newUser, "userInfo");
    alert("El usuario ha sido registrado con éxito");
  };

  const MyComponent = () => <Select options={options} />;
  return (
    <div
      style={{ width: "100vw", height: "100vh", backgroundColor: "whitesmoke" }}
    >
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
          Información de cuenta:
        </div>
      </div>
      <div className="form">
        <div>
          <InputLabel
            style={{ fontFamily: "Jost", color: "black", fontSize: "14.5px" }}
            htmlFor="email"
            className="nombres1"
          >
            Correo Electrónico
          </InputLabel>
          <Input
            id="email"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            className="nombres1"
            style={{ width: 300, marginBottom: 50 }}
          />
        </div>

        <div style={{ marginLeft: "10%" }}>
          <InputLabel
            style={{ fontFamily: "Jost", color: "black", fontSize: "14.5px" }}
            htmlFor="password"
            className="nombres1"
          >
            Contraseña
          </InputLabel>
          <Input
            type="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            className="nombres1"
            style={{ width: 300 }}
          />
        </div>
      </div>

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
          <input onChange={(e) => setDisplayName(e.target.value)}></input>
        </div>
        <div className="nombres2">
          Apellidos:
          <input onChange={(e) => setLastName(e.target.value)}></input>
        </div>
        <div className="nombres3">
          Documento de identidad (sin puntos):
          <input onChange={(e) => setDocuId(e.target.value)}></input>
        </div>
      </div>

      <div className="form">
        <div className="nombres1">
          Sexo:
          <input onChange={(e) => setSex(e.target.value)}></input>
        </div>
        <div className="nombres2">
          Fecha de Nacimiento:
          <input onChange={(e) => setBornDate(e.target.value)}></input>
        </div>
        <div className="nombres3">
          Ocupación:
          <input onChange={(e) => setOcupation(e.target.value)}></input>
        </div>
      </div>

      <div className="form">
        <div className="nombres1">
          País de Nacimiento:
          <input onChange={(e) => setCountry(e.target.value)}></input>
        </div>
        <div className="nombres2">
          Ciudad de Nacimiento:
          <input onChange={(e) => setCity(e.target.value)}></input>
        </div>
        <div className="nombres3">
          Ciudad Actual:
          <input onChange={(e) => setCurrentCity(e.target.value)}></input>
        </div>
      </div>

      <div className="form">
        <div className="nombres1">
          Dirección de Domicilio:
          <input onChange={(e) => setAddress(e.target.value)}></input>
        </div>
        <div className="nombres2">
          Teléfono / Celular:
          <input onChange={(e) => setPhone(e.target.value)}></input>
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
          <input onChange={(e) => setPastSurgery(e.target.value)}></input>
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
          <input onChange={(e) => setContactName(e.target.value)}></input>
        </div>
        <div className="nombres2">
          Apellidos:
          <input onChange={(e) => setContactLastName(e.target.value)}></input>
        </div>
        <div className="nombres3">
          Teléfono / Celular:
          <input onChange={(e) => setPhone(e.target.value)}></input>
        </div>
      </div>

      <button className="buttonstat3" onClick={sendInfo}>
        REGISTRARSE
      </button>
    </div>
  );
}

export default withRouter(History);
