import React from "react";
import "./App.css";
import { Route, Routes, useNavigate } from "react-router-dom";
import Home from "./pages/Home";

import Yoga from "./pages/Yoga";


import Landing from "./pages/landing.react";
import Login from "./pages/Login.react";


import Workout from "./pages/Workout.react";


import BicepCurls from "./components/BicepCurls";
import PushUps from "./components/PushUps";


import BodyMeasurmnets from "./pages/BodyMeasurements.react";

function App() {
  const navigate = useNavigate();
  const location = window.location.pathname;
  if (location === "/yoga" && location === "/bicepcurl") {
    const videoOutput = document.getElementsByClassName("input_video");
    const canvas = document.getElementsByClassName("output_canvas");
    videoOutput.style.display = "flex";
    canvas.style.display = "flex";
  }

  return (
    <>
      <Routes>
        <Route path="*" element={<Landing />} exact />
        <Route path="/" element={<Landing />} exact />
        <Route path="/login" element={<Login />} exact />
        <Route path="/bm" element={<BodyMeasurmnets />} exact />

        <Route path="/home" element={<Home />} exact />

  
        <Route path="/yoga" element={<Yoga />} exact />

      
        <Route path="/bicepcurls" element={<BicepCurls />} />
       
        <Route path="/pushups" element={<PushUps />} exact />
       
        <Route path="/workout" exact element={<Workout />} />
       
      </Routes>
      
     
    </>
  );
}

export default App;
