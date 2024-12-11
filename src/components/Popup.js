import React, { useState } from "react";
import "./popup.css";

export const PopUp = ({ onSubmit, onClose }) => {
  const [name, setName] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(name);
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
          <button type="submit">Join</button>
        </form>
      </div>
    </div>
  );
};
