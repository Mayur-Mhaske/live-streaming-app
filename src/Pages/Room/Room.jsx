import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Room = () => {
  const [userName, setUserName] = useState("");
  const navigate = useNavigate();

  //handlesubmit
  const handleInput = () => {
    if (!userName) {
      return alert("Please enter your name");
    }
    navigate(`/stream/${userName}`);
    setUserName("");
  };
  return (
    <>
      <div className="form-container">
        <h1>Start Your Streaming</h1>
        <div className="form-group">
          <input
            type="text"
            placeholder="Enter Your name"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
          <button onClick={handleInput}>Join </button>
        </div>
      </div>
    </>
  );
};

export default Room;
