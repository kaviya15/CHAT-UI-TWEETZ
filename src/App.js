import React , {useState} from "react";
import "./App.css";
import "./screens/login.css";
import Homescreen from "./screens/homescreen";


function App() {

    const [login_username, set_login_username] = useState("");
    const [user_logged_in , set_user_logged_in] = useState(false);

    const handleusername = (e) => {
      set_login_username(e.target.value);
    };
    const handlelogin =()=>{
      set_user_logged_in(true);
    }
  return (
    <>
      {user_logged_in ? (
        <Homescreen />
      ) : (
        <div className="wrapper">
          <div className="text-center mt-4 name">TweetZ</div>
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
