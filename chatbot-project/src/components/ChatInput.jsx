import { useState } from "react";
import { Chatbot } from "supersimpledev";
import "./ChatInput.css";

export function ChatInput({ setChatMessages }) {
  const [inputText, setInputText] = useState("");

  function saveChanges(event) {
    setInputText(event.target.value);
  }

  async function sendMessage() {
    if (!inputText.trim()) return;

    const userMessage = {
      message: inputText,
      sender: "user",
      id: crypto.randomUUID(),
    };

    const tempMessage = {
      message: "Loading...",
      sender: "robot",
      id: "loading",
    };

    setChatMessages((prev) => [...prev, userMessage, tempMessage]);
    setInputText("");

    const response = await Chatbot.getResponseAsync(inputText);

    setChatMessages((prev) =>
      prev.map((msg) =>
        msg.id === "loading"
          ? { ...msg, message: response, id: crypto.randomUUID() }
          : msg
      )
    );
  }

  function clearMessage() {
    setInputText("");
  }

  return (
    <div className="send-div">
      <input
        placeholder="Send a message to the Chatbot"
        size="35"
        onChange={saveChanges}
        onKeyDown={(event) => {
          if (event.key === "Enter") sendMessage();
          if (event.key === "Escape") clearMessage();
        }}
        value={inputText}
        className="send-input"
      />
      <button onClick={sendMessage} className="send-button">
        Send
      </button>
    </div>
  );
}
