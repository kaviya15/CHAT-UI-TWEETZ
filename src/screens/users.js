import React from "react";

export default function Users({ UserList }) {
  console.log(UserList);
  return (
    <>
      {
        UserList.map((value,index)=>{
           
            return (
              <>
                {" "}
                <div className="Users" id="Users-list">
                  <div className="Username">{value}</div>
                  <button className="Users-list-button"> + follow </button>
                </div>{" "}
                {index == UserList.length - 1 ? (
                  <></>
                ) : (
                  <div className="separator"></div>
                )}
              </>
            );
        }
        )
    }
    </>
  );
}
