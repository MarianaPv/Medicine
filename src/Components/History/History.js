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
      <div className="white">
        <table className="tableClosed">
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Edad</th>
            <th>Sexo</th>
            <th>Email</th>
            <th> Teléfono/Celular</th>
            <th> Ver historia clínica</th>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default withRouter(History);
