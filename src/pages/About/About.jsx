import React from "react";
import { useNavigate } from "react-router-dom";

import "./About.css";

export function About() {
  const navigate = useNavigate();

  return (
    <div className="about">
      <h3>About</h3>
      <button onClick={() => navigate("/home")}>Home</button>
    </div>
  );
}
