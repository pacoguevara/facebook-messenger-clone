import React, { useState } from "react";
import "./App.css";
import { Button } from "@material-ui/core";

function App() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const sendMessage = (event) => {
    event.preventDefault();
    setMessages([...messages, input]);
    setInput("");
  };
  return (
    <div className="App">
      <h1>hello folks!</h1>
      {messages.map((message) => (
        <p>{message}</p>
      ))}
      <form action="">
        <input
          type="text"
          value={input}
          onChange={(event) => setInput(event.target.value)}
        />
        <Button
          variant="contained"
          color="primary"
          type="submit"
          disabled={!input}
          onClick={sendMessage}
        >
          Send message
        </Button>
      </form>
    </div>
  );
}

export default App;
