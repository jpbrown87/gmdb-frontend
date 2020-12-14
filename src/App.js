import React from "react";
import "./App.css";
import MovieImg from "./components/MovieImg";

function App() {
  return (
    <div className="App">
      {/* Header */}
      <header className="navBar">
        <c>GMDB</c>
        <a className="active" href="">
          Home
        </a>
        <a href="">Login</a>
        <div class="search-container">
          <input type="text" placeholder="Search" id="Search" />
          <button type="SearchButton">Search</button>
        </div>
      </header>

      {/* Home */}
      <div className="main-page">
        <MovieImg />
      </div>
    </div>
  );
}

export default App;
