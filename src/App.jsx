import "./App.css";

import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home.jsx";
import Room from "./Pages/Room/Room.jsx";
import Streaming from "./Pages/Room/Streaming.jsx";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/live-stream" element={<Room />} />
        <Route path="/stream/:userName" element={<Streaming />} />
      </Routes>
    </>
  );
};

export default App;
