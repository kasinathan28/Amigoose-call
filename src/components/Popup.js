import React, { useState } from "react";
import "./popup.css";

export const PopUp = ({ onSubmit, onClose }) => {
  const [name, setName] = useState("");
  const [roomId, setRoomId] = useState(""); // New state to hold the Room ID

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleRoomIdChange = (e) => {
    setRoomId(e.target.value); // Update the Room ID as the user types
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(name, roomId); // Pass both name and roomId to onSubmit
    onClose();
  };

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <div className="popup-header">
          <div className="close-btn" onClick={onClose}>
            &times;
          </div>
        </div>
        <h2>Join the Call</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={handleNameChange}
            required
          />
          <input
            type="text"
            placeholder="Enter Room ID"
            value={roomId}
            onChange={handleRoomIdChange}
            required
          />
          <button type="submit">Join</button>
        </form>
      </div>
    </div>
  );
};
