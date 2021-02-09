import React, { useState, useEffect } from "react";
import { Input, InputLabel } from "@material-ui/core";
import { Link, withRouter } from "react-router-dom";
import * as ROUTES from "../../Routes/Routes.js";
import Navigation from "../NavBar/Navigation";
import Add from "./Add";
import History from "./History";
import "./Main.css";
import ReactSearchBox from "react-search-box";
import { useSelector } from "react-redux";
import axios from "axios";
import SearchField from "react-search-field";

function Main() {
  const [input, setInput] = useState("");
  const [PatientsList, setPatientsList] = useState();
  const [isHistoryOpen, setIsHistoryOpen] = useState(true);
  const userToken = useSelector((state) => state.userInfo.token);
  const [userData, setUserData] = useState(null);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const getUserInfo = async () => {
    try {
      console.log(userToken, "token");
      const config = {
        headers: {
          "content-type": "application/json",
        },
      };
      const res = await axios.get("http://localhost:3001/userapps/", config);
      setUserData(res.data);
    } catch (err) {
      alert(err);
    }
  };
  useEffect(() => {
    getUserInfo();
  }, []);
  useEffect(() => {
    console.log(userData, "userInfok");
  }, [userData]);

  const onChange = async (e) => {
    if (userData !== null) {
      setFilteredUsers(userData.users);
      console.log(filteredUsers);

      const PatientsList = ({ patientsList = [] }) => {
        return (
          <>
            {filteredUsers.map((data, index) => {
              if (data) {
                return (
                  <div key={data.name}>
                    <h1>{data.name}</h1>
                  </div>
                );
              }
              return null;
            })}
          </>
        );
      };

      const filtered = filteredUsers.filter((patient) => {
        return patient.name.toLowerCase().includes(input.toLowerCase());
      });
      setPatientsList(filteredUsers);
    }
  };
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
              <SearchField
                placeholder="Search..."
                onChange={onChange(input)}
                classNames="test-class"
              />
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
