import React from 'react'
import "../App.css";
import Tweet from "./tweet";
import Followers from "./followers";
import Users from "./users";
import Feed from "./feed";
export default function Homescreen() {
  return (
    <div className="container">
      <div className="app-container">
        {/* Followers Section */}
        <div className="left-layer">
          <div className="followers-list">
            <h5>Followers</h5>
            <Followers />
          </div>
        </div>
        {/* Tweet Section */}
        <div className="middle-layer">
          <div className="tweet-container">
            <Tweet />
          </div>
          <div className="feed-container">
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
        </div>
        {/* Users Section */}
        <div className="right-layer">
          <div className="users-list">
            <h5>Users</h5>
            <Users />
          </div>
        </div>
      </div>
    </div>
  );
}
