import React from "react";

import "./styles.css";

// don't change the Component name "App"
export default function App() {
  const [message, setMessage] = React.useState("");
  
  const messageHandler = (e) => {
    setMessage(e.target.value);
  };
  
  const [count, setCount] = React.useState(0);

  const counter = () => {
    setCount((prev)=>{
      return prev+1;
    })
  }

  return (
    <>
      <form>
        <label>Your message</label>
        <input type="text" onChange={messageHandler} />
        <p>
          {message.trim().length >= 3 ? "Valid Message" : "Invalid message"}
        </p>
      </form>
      <p>{count}</p>
      <button onClick={counter}>Increment</button>
    </>
  );
}
