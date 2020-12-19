import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Input, InputLabel } from "@material-ui/core";
import { Link, withRouter } from "react-router-dom";
import * as ROUTES from "../../Routes/Routes.js";
import Navigation from "../NavBar/Navigation";
import "./Stats.css";
import arrow from "./flecha-hacia-abajo.png";
import Select from "react-select";

function Stats(props) {
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];

  const MyComponent = () => <Select options={options} />;
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <Navigation />
      <div className="wrapper">
        <div className="blue">
          <div className="content1">Cuidandonos Mutuamente.</div>
          <div className="content2">
            Aquí podrás conocer las estadísticas de los pacientes a través del
            tiempo.
          </div>

          <div className="content2">
            Para conocer los datos de pacientes particulares, utiliza el
            siguiente filtro:
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
              <Select options={options} className="filter" />
              <button className="buttonstat">Filtrar</button>
            </div>
          </div>

          <img src={require("./flecha-hacia-abajo.png")} className="arrow" />
        </div>
        <img src={require("./whiteb.svg")} className="wave" />
      </div>
    </div>
  );
}

export default withRouter(Stats);
