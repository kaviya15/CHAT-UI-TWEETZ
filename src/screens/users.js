import React, { useState,useContext, useEffect } from "react";
import { UserContext } from "../UserContext";

import "axios";
import axios from "axios";
export default function Users() {
  const { userId , globalRefresh, triggerGlobalRefresh} = useContext(UserContext);

  const [userList, setUserList] = useState([]);

  const followUser  = (id)=>{
 axios
   .post(
     "http://localhost:8080/api/following/follow",
     { followee_id: id, follower_id: userId },
     { headers: { "Content-Type": "application/json" } }
   )
   .then((response) => {
     console.log("Unfollow successful:", response.data);
     // Trigger re-fetch of the following list
     triggerGlobalRefresh(); // Toggle the state to trigger useEffect
   })
   .catch((error) => {
     console.error("Error:", error);
   });
  }

  useEffect(() => {
    console.log("user id ", userId);
    const fetchUsers = async () => {
      const response = await axios.get(
        `http://localhost:8080/api/users/${userId}`
      );

      let data = response.data; // Assuming the API returns a string like your example
      setUserList(data);
    };

    fetchUsers(); // Call the function to fetch users
  }, [userId, globalRefresh]); ; // Empty dependency array to run the effect only once

  return (
    <>
      {userList.map((value, index) => {
        return (
          <>
            {" "}
            <div key={value.id} className="Users" id="users-list">
              <div className="username">{value.name}</div>
              <button
                onClick={()=>followUser(value.id)}
                className="Users-list-button"
              >
                {" "}
                Follow{" "}
              </button>
            </div>{" "}
            {index == userList.length - 1 ? (
              <></>
            ) : (
              <div className="separator"></div>
            )}
          </>
        );
      })}
    </>
  );
}
