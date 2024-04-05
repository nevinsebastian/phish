import React from "react";
import "./css.css"; // Import your CSS file

const InteractiveInput = () => {
  return (
    <div className="interactive-input" style={{ width: "100vw", height: "100vh", backgroundImage: `url(/BG.png)`, backgroundSize: "cover", backgroundPosition: "center", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
      <div className="plus-jakarta-sans plus-jakarta-sans-bold" style={{ position: "absolute", top: 60, left: 20, fontFamily: "Plus Jakarta Sans", fontSize: 31.58, fontWeight: "bold", color: "white" }}>PhisherX</div>
      {/* Your other content here */}
    </div>
  );
};

export default InteractiveInput;
