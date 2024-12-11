import React, { useState } from "react";
import {
  ExchangesIcon,
  HDIcon,
  LoveIcon,
  PhotoIcon,
  VideoCallIcon,
} from "../assets";
import { PopUp } from "../components/Popup";
import { useNavigate } from "react-router-dom";

export const Intro = () => {
  const [isPopup, setIsPopup] = useState(false);
  const [userName, setUserName] = useState("");
  const [roomId, setRoomId] = useState("");
  const navigate = useNavigate();

  const handlePopup = () => {
    setIsPopup(!isPopup); // Toggle popup visibility
  };

  const handleNavigate = (name, roomId) => {
    navigate(`/call/${name}/${roomId}`); // Navigate to the call route with the username
  };

  const handleNameSubmit = (name, roomId) => {
    setUserName(name);
    setRoomId(roomId);
    handleNavigate(name, roomId); // Pass both name and roomId to navigate
  };

  return (
    <>
      <div className="navbar">
        <div className="image-container">
          <LoveIcon />
        </div>
        <p>Amigoose</p>
      </div>
      <div className="intro-container">
        <h1 className="intro-title">Amigoose</h1>
        <h1 className="intro-sub-title">The friends connection</h1>
        <div className="intro-main-content">
          <div className="intro-image-container">
            <VideoCallIcon />
          </div>
          <div className="try-now">
            <LoveIcon />
            <button onClick={handlePopup}>Try Now</button>
          </div>
          <p className="intro-description">
            FriendConnect is the ultimate platform to connect and bond with your
            friends through online video calls. Whether it's a casual catch-up,
            a group hangout, or a virtual party, FriendConnect provides a
            seamless and immersive experience. Enjoy high-quality video,
            user-friendly features, and a reliable connection designed to keep
            you and your friends close, no matter the distance.
          </p>
        </div>

        <div className="intro-features">
          <h2>Features</h2>
          <div className="feature-cards">
            <div className="feature-card">
              <div className="feature-icon-container">
                <HDIcon />
              </div>
              <h3>High-Quality Video</h3>
              <p>Experience crystal-clear video calls with minimal latency.</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon-container">
                <PhotoIcon />
              </div>
              <h3>User-Friendly Design</h3>
              <p>
                Navigate effortlessly with an intuitive interface and seamless
                design.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon-container">
                <ExchangesIcon />
              </div>
              <h3>Cross-Device Compatibility</h3>
              <p>Connect with friends anytime, anywhere, on any device.</p>
            </div>
          </div>
        </div>

        <div className="intro-additional-info">
          <p>
            Designed with you in mind, our application is built for
            responsiveness and ease of use, ensuring compatibility across all
            devices. Join us on this exciting journey and make unforgettable
            moments with your friends anytime, anywhere.
          </p>
        </div>

        <div className="intro-credits">
          <h3>Credits</h3>
          <p>
            Developed by{" "}
            <a
              href="https://kasinathanb.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <strong>Kasinathan</strong>
            </a>
            . Special thanks to all the support and inspiration along the way.
            I'm passionate about creating innovative experiences and bringing
            people together through technology.
          </p>
        </div>
      </div>
      {/* Only show the PopUp if it's triggered */}
      {isPopup && <PopUp onSubmit={handleNameSubmit} onClose={handlePopup} />}
    </>
  );
};
