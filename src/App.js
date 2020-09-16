import React from "react";
import TinderCards from "./TinderCards";
import "./App.css";
import Header from "./Header";


function App() {
  return (
    <div className="app">
      {/* Header */}
      <Header />
      {/* TinderCards */}
      <TinderCards />
      {/* SwipeButtons */}
    </div>
  );
}

export default App;
