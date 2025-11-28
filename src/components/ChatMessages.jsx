import { useEffect, useRef } from "react";
import { ChatMessage } from "./ChatMessage";
import "./ChatMessages.css";
function ChatMessages({ chatMessages }) {
  const chatMessageRef = useRef(null);
  useEffect(() => {
    const containerElement = chatMessageRef.current;
    if (containerElement) {
      containerElement.scrollTop = containerElement.scrollHeight;
    }
  }, [chatMessages]);
  return (
    <div className="chat-messages" ref={chatMessageRef}>
      {chatMessages.map((chatMessage) => (
        <ChatMessage
          message={chatMessage.message}
          sender={chatMessage.sender}
          timeStamp={chatMessage.timeStamp}
          key={chatMessage.id}
        />
      ))}
    </div>
  );
}

export default ChatMessages;
