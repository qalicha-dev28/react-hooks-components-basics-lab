import React from "react";

function Navbar() {
  return (
    <nav>
      <p>Navigation Bar</p>
    </nav>
  );
}

function Home() {
  return (
    // This is the line that needs the id="home"
    <div id="home">
      <h1>Welcome Home!</h1>
    </div>
  );
}

function About() {
  return (
    <div id="about">
      <h2>About</h2>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
    </div>
  );
}

export default App;
