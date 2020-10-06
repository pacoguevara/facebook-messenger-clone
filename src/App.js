import React, { useEffect, useState } from "react";
import "./App.css";
import { Button, FormControl, InputLabel, Input } from "@material-ui/core";
import Message from "./Message";

function App() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    { username: "Paco", text: "Wazz up" },
  ]);
  const [username, setUserName] = useState("");

  useEffect(() => {
    setUserName(prompt("Please enter your name"));
  }, []);

  const sendMessage = (event) => {
    event.preventDefault();
    setMessages([...messages, { username: username, text: input }]);
    setInput("");
  };
  return (
    <div className="App">
      <h1>hello folks!</h1>
      <h2>Welcome {username}</h2>
      {messages.map((message) => (
        <Message message={message} username={username} />
      ))}
      <form action="">
        <FormControl>
          <InputLabel>Enter a message</InputLabel>
          <Input
            type="text"
            value={input}
            onChange={(event) => setInput(event.target.value)}
          />
        </FormControl>
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
