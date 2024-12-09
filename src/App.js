import React from "react";
import "./App.css";
import Tweet from "./screens/tweet";
import Followers from "./screens/followers";
import Users from "./screens/users";
import Feed from "./screens/feed";

function App() {
  return (
    <div className="container">
      <div className="app-container">
        {/* Followers Section */}
        <div className="followers-list">
          <h5>Followers</h5>
          <Followers FollowersList={["kaviya", "Katherine"]} />
        </div>

        {/* Tweet Section */}
        <div className="tweet-container">
          <h5>Tweet Section</h5>
          <Tweet />
        </div>
        <div className="feed-container">
          <h5>Feed Section</h5>
          <Feed
            FeedList={[
              {
                feed_id: 1,
                poster_id: 1,
                poster_name: "Dimple",
                tweet: "Hey this is my post",
              },
              {
                feed_id: 2,
                poster_id: 1,
                poster_name: "Dimple",
                tweet: "Successfully reached ireland",
              },
              
            ]}
          />
        </div>
        {/* Users Section */}
        <div className="users-list">
          <h5>Users</h5>
          <Users UserList={["Dimple", "Shalindfdfdi"]} />
        </div>
      </div>
    </div>
  );
}

export default App;
