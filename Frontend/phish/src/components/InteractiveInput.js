// InteractiveInput.js

import React from "react";
import "./css.css"; // Import your CSS file

const InteractiveInput = () => {
  return (
    <div className="interactive-input" style={{ width: "100vw", height: "100vh", backgroundImage: `url(/BG.png)`, backgroundSize: "cover", backgroundPosition: "center", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
      <div className="plus-jakarta-sans plus-jakarta-sans-bold" style={{ position: "absolute", top: 60, left: 20 }}>PhisherX</div>
      <div className="help-text">#We are here to help to stay safe</div>
      {/* Your other content here */}
    </div>
  );
};

export default InteractiveInput;
