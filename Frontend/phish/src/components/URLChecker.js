import React, { useState } from "react";
import "./URLForm.css"; // Import CSS file for styling

const URLForm = () => {
  const [url, setURL] = useState("");
  const [prediction, setPrediction] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Dummy logic to simulate checking if the link is phishing
      const isPhishing = Math.random() < 0.5; // 50% chance of being phishing
      setPrediction(isPhishing ? "Phishing" : "Legitimate");
      setError("");
      if (!isPhishing) {
        // Check if the URL starts with "http://" or "https://"
        if (!url.startsWith("http://") && !url.startsWith("https://")) {
          setURL("http://" + url); // Add "http://" if missing
        }
        window.location.href = url; // Redirect to the given link if it's not phishing
      }
    } catch (error) {
      console.error("Error:", error);
      setError("An error occurred while checking the link.");
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <label>
          Enter URL:
          <input type="text" value={url} onChange={(e) => setURL(e.target.value)} />
        </label>
        <button type="submit">Check</button>
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
      {prediction === "Legitimate" && (
        <div>
          <p>This URL is safe. You will be redirected shortly...</p>
        </div>
      )}
      <div className="faq-container">
        <h2>FAQ</h2>
        <p>Here are some common questions about phishing:</p>
        <ul>
          <li>What is phishing?</li>
          <li>How can I recognize a phishing attempt?</li>
          <li>What should I do if I suspect an email or website is phishing?</li>
        </ul>
      </div>
    </div>
  );
};

export default URLForm;
