import robotImage from "../assets/robot.png";
import userImage from "../assets/user.png";
import "./ChatMessage.css";
export function ChatMessage({ message, sender }) {
  return (
    <div className={sender === "user" ? "chat-user" : "chat-robot"}>
      {sender === "robot" && (
        <img src={robotImage} className="chat-robot-profile" />
      )}
      <div className="chat-text">{message}</div>

      {sender === "user" && (
        <img src={userImage} className="chat-user-profile" />
      )}
    </div>
  );
}
