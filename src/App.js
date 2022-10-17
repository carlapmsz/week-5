import React from "react";
import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div class="container">
        <Weather />
        <footer>
          Coded by{" "}
          <a href="/" target="_blank">
            Carla Miranda
          </a>{" "}
          and open-source on{" "}
          <a href="/" target="_blank">
            GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
export default App;
