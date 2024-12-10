import React,{useState} from "react";

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
  return (
    <>
      {userList.map((value, index) => {
        return (
          <>
            {" "}
            <div key={value.id} className="Users" id="users-list">
              <div className="username">{value.name}</div>
              <button className="Users-list-button"> + follow </button>
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
