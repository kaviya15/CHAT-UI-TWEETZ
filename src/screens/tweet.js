import React,{useState} from 'react'

export default function Tweet() {

  const [message, setMessage] = useState("");

  const handleMessage =(e)=>{
    setMessage(e.target.value);
    
  }
  const handlePost =()=>{
    if(message.length!=0){
      alert("message posted successfully");
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
