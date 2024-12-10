

import React , {useState} from "react";

export default function Followers() {
      const [followers_list, set_followers_list] = useState([
        {
          name: "Dimple",
          user_id: 2,
          follower_id: 1,
          id: 1,
        },
        {
          name: "Katheriene",
          user_id: 3,
          follower_id: 1,
          id: 2,
        },
        {
          name: "Caroline",
          user_id: 4,
          follower_id: 1,
          id: 3,
        },
        {
          name: "Diana",
          user_id: 6,
          follower_id: 1,
          id: 4,
        },
        {
          name: "Rose",
          user_id: 8,
          follower_id: 1,
          id: 15,
        },
      ]);


    const unFollowUser = (id)=>{
         set_followers_list((prevList) =>
           prevList.filter((item) => item.id !== id)
         );
    }

  return (
    <>
      {followers_list.map((value, index) => {
        return (
          <>
            {" "}
            <div key={value.id} className="followers" id="followers-list">
              <div className="followername">{value.name}</div>
              <button
                onClick={() => unFollowUser(value.id)}
                className="followers-list-button"
              >
                {" "}
                - un follow{" "}
              </button>
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

