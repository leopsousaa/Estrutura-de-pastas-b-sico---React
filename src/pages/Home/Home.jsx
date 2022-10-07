import React from "react";
import { useNavigate } from "react-router-dom";

import "./Home.css";

export function Home() {
  const navigate = useNavigate();

  return (
    <div className="home">
      <h3>Home</h3>
      <button onClick={() => navigate("/about")}>About</button>
    </div>
  );
}
