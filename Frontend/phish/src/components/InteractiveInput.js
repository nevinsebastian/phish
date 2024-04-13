// InteractiveInput.js

import React from "react";
import "./css.css"; // Import your CSS file

const InteractiveInput = () => {
  return (
    <div className="interactive-input" style={{ width: "100vw", height: "100vh", backgroundImage: `url(/BG.png)`, backgroundSize: "cover", backgroundPosition: "center", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
      <div className="search-bar-container">
        <input type="text" className="search-bar" placeholder="Enter your Link" />
      </div>
      <div className="plus-jakarta-sans plus-jakarta-sans-bold" style={{ position: "absolute", top: 90, left: 90 }}>PhisherX<span className="dot"></span></div>
      <div className="help-text">We are here to help to stay safe</div>
      {/* Your other content here */}
    </div>
  );
};

export default InteractiveInput;
