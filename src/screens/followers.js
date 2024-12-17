

import axios from "axios";
import React, { useEffect, useContext,useState } from "react";
import { UserContext } from "../UserContext";
export default function Followers() {
  const { userId } = useContext(UserContext);
  const [followers_list, set_followers_list] = useState([]);

 
  useEffect(() => {
    console.log("user id ", userId);
    const fetchUsers = async () => {
      const response = await axios.get(
        `http://localhost:8080/api/following/${userId}/followers`
      );

      let data = response.data; // Assuming the API returns a string like your example
      set_followers_list(data);
    };

    fetchUsers(); // Call the function to fetch users
  }, []); // Empty dependency array to run the effect only once

  // useEffect(()=>{

  //   fetchUsers = async()=>{
  //       axios.get("")
  //   }
  //   fetchUsers();
  // })

  return (
    <>
      {followers_list.map((value, index) => {
        return (
          <>
            {" "}
            <div key={value.id} className="followers" id="followers-list">
              <div className="followername">{value.name}</div>
             
            </div>{" "}
            {index != followers_list.length - 1 ? (
              <div className="separator"></div>
            ) : (
              <></>
            )}
          </>
        );
      })}
    </>
  );
}

