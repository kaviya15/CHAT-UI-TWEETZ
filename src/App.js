import React , {useState} from "react";
import "./App.css";
import "./screens/login.css";
import Homescreen from "./screens/homescreen";
import axios from "axios";

function App() {

    const [login_username, set_login_username] = useState("");
    const [user_logged_in , set_user_logged_in] = useState(false);

    const handleusername = (e) => {
      set_login_username(e.target.value);
    };
    const handlelogin =()=>{
      

     axios
       .post(
         "http://localhost:8080/api/users",
         {
           id: 4,
           name: login_username,
         },
         {
           headers: {
             "Content-Type": "application/json",
           },
         }
       )
       .then((response) => {
         set_user_logged_in(true);
         console.log(response.data);
       })
       .catch((error) => {
         set_user_logged_in(false);
         alert("Error creating user", error);
         console.error("Error:", error);
       });

    }
  return (
    <>
      {user_logged_in ? (
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
                value={login_username}
                onChange={handleusername}
              />
            </div>

            <button onClick={handlelogin} className="btn mt-3">
              Login
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
