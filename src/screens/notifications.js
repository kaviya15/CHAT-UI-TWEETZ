import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { UserContext } from "../UserContext";

export default function Notification() {
  const { userId, userName, globalRefresh } = useContext(UserContext);
  const [newNotifications, setNewNotifications] = useState([]);
   const fetchUsers = async () => {
     try {
       const response = await axios.post(
         `http://localhost:8080/api/notifications/`,
         { user_name: userName, user_id: userId },
         { headers: { "Content-Type": "application/json" } }
       );

       const data = response.data; // Assuming the API returns a string like your example
       setNewNotifications(data); // Update state here
     } catch (error) {
       console.error("Error fetching notifications:", error);
     }
   };
  useEffect(() => {
 

    fetchUsers();
  }, [userId, userName, globalRefresh]);

  const closeAll = async()=>{
     const fetchUsers1 = async () => {
       try {
         const response = await axios.post(
           `http://localhost:8080/api/notifications/clear`,
           { user_name: userName, user_id: userId },
           { headers: { "Content-Type": "application/json" } }
         );

       } catch (error) {
         console.error("Error fetching notifications:", error);
       }
     };

     await fetchUsers1();

     await fetchUsers();
  }

  return (
    <div className="notifications">
      {newNotifications.length > 0 ? (
        <>
        <button onClick={closeAll} className="clear_all">Clear All</button>
          {newNotifications.map((value, index) => (
            <div className="notification">
              {value.content} 
            </div>
          ))}
        </>
      ) : (
        <p className="no_new_not">No New Notifications</p>
      )}
    </div>
  );
}
