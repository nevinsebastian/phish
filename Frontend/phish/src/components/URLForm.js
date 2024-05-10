// src/components/URLForm.js
import React, { useState } from "react";
import axios from "axios";
import "./URLForm.css"; // Import CSS file for styling

const URLForm = () => {
  const [url, setURL] = useState("");
  const [prediction, setPrediction] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://16.171.255.192:8000/predict", { url });
      setPrediction(response.data.prediction);
      setError("");
    } catch (error) {
      console.error("Error:", error);
      setError("An error occurred while fetching the prediction.");
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <label>
          Enter URL:
          <input type="text" value={url} onChange={(e) => setURL(e.target.value)} />
        </label>
        <button type="submit">Submit</button>
      </form>
      {error && <p className="error">{error}</p>}
      {prediction && (
        <div className="prediction-container">
          <p>Prediction: {prediction}</p>
          <p className={prediction === "Phishing" ? "phishing-text" : "legitimate-text"}>
            {prediction === "Phishing" ? "This URL is likely phishing." : "This URL is likely legitimate."}
          </p>
        </div>
      )}
    </div>
  );
};

export default URLForm;
