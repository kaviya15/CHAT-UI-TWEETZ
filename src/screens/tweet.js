import axios from 'axios';
import React, { useState, useContext } from "react";
import { UserContext } from "../UserContext";

export default function Tweet() {
  const { userId } = useContext(UserContext);
  const [message, setMessage] = useState("");

  const handleMessage =(e)=>{
    setMessage(e.target.value);
  }
  const handlePost =()=>{
    if(message.length!=0){
      alert("message posted successfully");
         axios
           .post(
             "http://localhost:8080/api/posts/",

             { user_id: userId, content: message },
             { headers: { "Content-Type": "application/json" } }
           )
           .then((response) => {
             alert("message posted successfully");
             console.log("Login successful:", response.data);
           })
           .catch((error) => {
             alert("Failed posting the message");
             console.error("Error:", error);
           });


      setMessage("");
    }else{
      alert("please create a message before posting")
    }
    
  }
  return (
    <>
      <div className="tweet_container">
        <input
          placeholder="write your message here..."
          type="text"
          value={message}
          name=""
          id=""
          className="tweet_input"
          onChange={handleMessage}
        />
        <button className="post" onClick={handlePost}>
          Post
        </button>
      </div>
    </>
  );
}
