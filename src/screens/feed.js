import React, { useEffect, useContext, useState } from "react";
import axios from "axios";
import { UserContext } from "../UserContext";

export default function Feed() {
  const { userId, globalRefresh, triggerGlobalRefresh } =
    useContext(UserContext);
  const [FeedList, setFeedList] = useState([]);

  useEffect(() => {
    console.log("user id ", userId);
    const fetchUsers = async () => {
      const response = await axios.get(
        `http://localhost:8080/api/posts/${userId}`
      );

      let data = response.data; // Assuming the API returns a string like your example
      setFeedList(data);

      console.log("use effect rendering");
    };

    fetchUsers();
  }, [userId, globalRefresh]); 
  return (
    <div className="feedList">
      {FeedList.map((value, index) => {
        return (
          <div className="feed">
            <h2 className="feed_id" id={value.feed_id}>
              {value.content}
            </h2>
            <p className="postedby" id={value.poster_id}>
              Posted By - {value.name} at {  value.timestamp.split(".")[0]}
            </p>
          </div>
        );
      })}
    </div>
  );
}
