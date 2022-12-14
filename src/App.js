import React from "react";
import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div class="container">
        <Weather defaultCity="London" />
        <footer>
          Coded by{" "}
          <a href="https://www.shecodes.io/" target="_blank" rel="noreferrer">
            SheCodes
          </a>{" "}
          and open-source on{" "}
          <a
            href="https://github.com/carlapmsz/week-5"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          and hosted{" "}
          <a
            href="https://leafy-travesseiro-fb2c75.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            on Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
export default App;
