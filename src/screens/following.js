import axios from "axios";
import React, { useEffect, useContext, useState } from "react";
import { UserContext } from "../UserContext";

export default function Following() {
  const { userId, globalRefresh, triggerGlobalRefresh } =
    useContext(UserContext);

  const [following_list, set_following_list] = useState([]);

  const unFollowUser = (id) => {
    axios
      .post(
        "http://localhost:8080/api/following/unfollow",
        { followee_id: id, follower_id: userId },
        { headers: { "Content-Type": "application/json" } }
      )
      .then((response) => {
        console.log("Unfollow successful:", response.data);
        // Trigger re-fetch of the following list
       triggerGlobalRefresh();// Toggle the state to trigger useEffect
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  useEffect(() => {
    console.log("Fetching following list for user ID:", userId);
    const fetchUsers = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/api/following/${userId}/following`
        );
        let data = response.data;
        set_following_list(data);
      } catch (error) {
        console.error("Error fetching following list:", error);
      }
    };

    if (userId) {
      fetchUsers();
    }
  }, [userId, globalRefresh]); // Re-run when userId or triggerFetch changes

  return (
    <>
      {following_list.map((value, index) => {
        return (
          <React.Fragment key={value.id}>
            <div className="followings" id="followings-list">
              <div className="followingname">{value.name}</div>
              <button
                onClick={()=>unFollowUser(value.id)}
                className="followers-list-button"
              >
                Unfollow
              </button>
            </div>
            {index !== following_list.length - 1 && (
              <div className="separator"></div>
            )}
          </React.Fragment>
        );
      })}
    </>
  );
}
