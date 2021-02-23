import React from "react";
import Weather from "./Weather";

import './App.css';

export default function App() {
  return (
  <div className="App">
    <div className="container">
     <Weather defaultCity="New York" />
    <footer>
      This project was coded by Carolyn MacLeod and is <a href="https://github.com/camacleod527/react-final-project" 
  target="_blank">
    open-sourced on GitHub
  </a>
  </footer>
  </div>
  </div>
  );
}
