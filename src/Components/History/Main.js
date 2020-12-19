import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Input, InputLabel } from "@material-ui/core";
import { Link, withRouter } from "react-router-dom";
import * as ROUTES from "../../Routes/Routes.js";
import Navigation from "../NavBar/Navigation";
import Add from "./Add";
import History from "./History";
import "./Main.css";
import Select from "react-select";

function Main(props) {
  const [isHistoryOpen, setIsHistoryOpen] = useState(true);
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];

  const MyComponent = () => <Select options={options} />;

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <Navigation />
      <div className="wrapper2">
        <div className="blue2">
          <div className="content11">Buscar paciente por nombre o cédula</div>

          <div className="content22">
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "2fr 1fr 1fr ",
                width: "100%",
              }}
            >
              <Select options={options} className="filter" />
              <button
                className="buttonstat2"
                onClick={() => setIsHistoryOpen(true)}
              >
                Filtrar
              </button>
              <button
                className="buttonAñadir"
                onClick={() => setIsHistoryOpen(false)}
              >
                Añadir paciente +
              </button>
            </div>
          </div>
        </div>
        <div className="white">
          {isHistoryOpen == true ? <History /> : <Add />}
        </div>
      </div>
    </div>
  );
}

export default withRouter(Main);
