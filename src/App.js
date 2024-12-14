import React, { useState, useContext } from "react";
import "./App.css";
import "./screens/login.css";
import Homescreen from "./screens/homescreen";
import axios from "axios";
import { UserContext } from "./UserContext";

function App() {
  const { setUserId, setUserName } = useContext(UserContext); // Access setUserId from context
  const [loginUsername, setLoginUsername] = useState("");
  const [userLoggedIn, setUserLoggedIn] = useState(false);

  const handleUsername = (e) => {
    setLoginUsername(e.target.value);
  };

  const handleLogin = () => {
    axios
      .post(
        "http://localhost:8080/api/users",
        { name: loginUsername },
        { headers: { "Content-Type": "application/json" } }
      )
      .then((response) => {
        setUserLoggedIn(true);
        setUserId(response.data.id); // Set user_id in context
        setUserName(loginUsername);
        console.log("Login successful:", response.data);
      })
      .catch((error) => {
        setUserLoggedIn(false);
        alert("Error logging in");
        console.error("Error:", error);
      });
  };

  return (
    <>
      {userLoggedIn ? (
        <Homescreen />
      ) : (
        <div className="wrapper">
          <div className="text-center mt-4 name">!App Name!</div>
          <div className="p-3 mt-3">
            <div className="form-field d-flex align-items-center">
              <span className="far fa-user"></span>
              <input
                type="text"
                name="userName"
                id="userName"
                placeholder="Username"
                value={loginUsername}
                onChange={handleUsername}
              />
            </div>

            <button onClick={handleLogin} className="btn mt-3">
              Login
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
