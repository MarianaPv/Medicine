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
  const [selected, setSelected] = useState();
  const [patientsList, setPatientsList] = useState();
  const [searchedUser, setSearchedUser] = useState();
  const [isHistoryOpen, setIsHistoryOpen] = useState(true);
  const userToken = useSelector((state) => state.userInfo.token);
  const [userData, setUserData] = useState(null);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const getUserInfo = async () => {
    try {
      const config = {
        headers: {
          "content-type": "application/json",
        },
      };
      const res = await axios.get("http://localhost:3001/userapps/", config);
      setUserData(res.data);

      console.log(userData, "user");
    } catch (err) {
      alert(err);
    }
  };
  useEffect(() => {
    getUserInfo();
  }, []);
  useEffect(() => {
    console.log(selected);
  }, [userData, searchedUser, selected]);

  const onChange = (ele) => {
    if (userData !== null) {
      setFilteredUsers(userData.users);

      setSearchedUser(ele);

      // if (filteredUsers.includes(ele) === true) {
      //   setPatientsList(filteredUsers.filter(ele));
      //   console.log("hurray");
      // }
    }
  };

  const selectedUser = (ele) => {
    console.log(patientsList, "nombre");
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
              <div style={{ display: "flex", flexDirection: "column" }}>
                <SearchField
                  placeholder="Buscar..."
                  onChange={(ele) => onChange(ele)}
                  classNames="test-class"
                />
                {filteredUsers
                  .filter((ele) => {
                    if (searchedUser === "") {
                      return null;
                    } else if (
                      ele.displayName
                        .toLowerCase()
                        .includes(searchedUser.toLowerCase())
                    ) {
                      return ele;
                    }
                  })
                  .map((ele, index) => {
                    if (filteredUsers) {
                      return (
                        <div key={ele} style={{ backgroundColor: "white" }}>
                          <p onClick={() => setSelected(ele.displayName)}>
                            {ele.displayName}
                          </p>
                        </div>
                      );
                    }
                    return null;
                  })}{" "}
              </div>
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
