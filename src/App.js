import React, { Component } from "react";
import "./App.css";
import MovieImg from "./components/MovieImg";

class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      name: "this is the name",
    };
  }

  fetchData = () => {
    fetchMock.mock('http://example.com', 200);
    const res = await fetch('http://example.com');
    assert(res.ok);
    fetchMock.restore();
  }

  render() {
    return (
      <div className="App">
        {/* Header */}
        <header className="navBar">
          <c>GMDB</c>
          <a className="active" href="a">
            Home
          </a>
          <a href="a">Login</a>
          <div class="search-container">
            <input type="text" placeholder="Search" id="Search" />
            <button type="SearchButton">Search</button>
          </div>
        </header>
        {/* Home */}
        <div className="main-page">
          <MovieImg />
        </div>
        {/* FetchData */}
        { fetchData }
      </div>
    );
  }
}

export default App;
