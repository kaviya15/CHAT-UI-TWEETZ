import React, { useState, useEffect } from "react";
import "axios";
import axios from "axios";
export default function Users() {
  const [userList, setUserList] = useState([
    {
      id: 20,
      name: "Terry",
    },
    {
      id: 13,
      name: "Tom",
    },
    {
      id: 16,
      name: "Jack",
    },
    {
      id: 23,
      name: "Amy",
    },
    {
      id: 43,
      name: "Chandler",
    },
    {
      id: 13,
      name: "Joe",
    },
  ]);

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await axios.get("http://localhost:8080/api/users");

   let data = response.data; // Assuming the API returns a string like your example
    setUserList(data);

    };

    fetchUsers(); // Call the function to fetch users
  }, []); // Empty dependency array to run the effect only once

  return (
    <>
      {userList.map((value, index) => {
        return (
          <>
            {" "}
            <div key={value.id} className="Users" id="users-list">
              <div className="username">{value.name}</div>
              <button className="Users-list-button"> Follow </button>
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
