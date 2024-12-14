import React, { useState } from "react";
import "../App.css";
import Tweet from "./tweet";
import Followers from "./followers";
import Following from "./following";
import User from "./user";
import Users from "./users";
import Notification from "./notifications";
import Feed from "./feed";

export default function Homescreen() {
  const [buttonState, setButtonState] = useState("Following");
  const [buttonStateUsers, setButtonStateUsers] = useState("users");

  const followersButton = () => {
    setButtonState("Followers");
  };

  const followingButton = () => {
    setButtonState("Following");
  };

  const notificationsButton = () => {
    setButtonStateUsers("notification");
  };

  const userssButton = () => {
    setButtonStateUsers("users");
  };

  return (
    <div className="container">
      <div className="app-container">
        {/* Followers Section */}
        <div className="left-layer">
          <User /> <br />
          <div className="follow-div">
            <div className="followers-list">
              <button
                onClick={followersButton}
                className={buttonState === "Followers" ? "active-button" : ""}
              >
                Followers
              </button>
            </div>

            <div className="following-list">
              <button
                onClick={followingButton}
                className={buttonState === "Following" ? "active-button" : ""}
              >
                Following
              </button>
            </div>
          </div>
          <div className="separator"></div>
          <div className="display-list-ff">
            {buttonState === "Following" ? <Following /> : <Followers />}
          </div>
        </div>

        {/* Tweet Section */}
        <div className="middle-layer">
          <div className="tweet-container">
            <Tweet />
          </div>
          <div className="feed-container">
            <Feed />
          </div>
        </div>

        {/* Users Section */}
        <div className="right-layer">
          <div className="users-div">
            <div className="users-list">
              <button
                onClick={userssButton}
                className={buttonStateUsers === "users" ? "active-button" : ""}
              >
                Users
              </button>
            </div>
            <div className="notify-list">
              <button
                onClick={notificationsButton}
                className={
                  buttonStateUsers === "notification" ? "active-button" : ""
                }
              >
                Notifications
              </button>
            </div>
          </div>
          <div className="separator"></div>
          <div className="display-list-uu">
            {buttonStateUsers === "users" ? <Users /> : <Notification />}
          </div>
        </div>
      </div>
    </div>
  );
}
