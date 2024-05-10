import React, { useState, useRef, useEffect } from "react";
import "./css.css"; // Import your CSS file

const InteractiveInput = () => {
  const [inputText, setInputText] = useState("");
  const [prediction, setPrediction] = useState(null);
  const [redirectCountdown, setRedirectCountdown] = useState(5);
  const [showFAQ, setShowFAQ] = useState(false);
  const [showFAQButton, setShowFAQButton] = useState(true);
  const faqRef = useRef(null);

  const toggleFAQ = () => {
    setShowFAQ(!showFAQ);
    setShowFAQButton(false);
  };

  const hideFAQ = () => {
    setShowFAQ(false);
    setShowFAQButton(true);
  };

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      submitInputText();
    }
  };

  const submitInputText = () => {
    // Call the API endpoint with the input text
    fetch("http://16.171.255.192:8000/predict", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ urls: inputText })
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      // Handle the API response here
      console.log(data);
      // Update state with prediction result
      setPrediction(data.prediction);
      // Redirect if the link is safe
      if (data.prediction === "good") {
        setTimeout(() => {
          window.open(addHTTPProtocol(inputText), '_blank');
          const countdownInterval = setInterval(() => {
            setRedirectCountdown(countdown => countdown - 1);
          }, 1000);
          setTimeout(() => {
            clearInterval(countdownInterval);
          }, 5000); // Stop countdown after 5 seconds
        }, 5000); // Redirect after 5 seconds
      }
    })
    .catch(error => {
      console.error("Error:", error);
    });
  };

  // Function to add HTTP protocol if missing
  const addHTTPProtocol = (url) => {
    if (!url.match(/^https?:\/\//i)) {
      return 'http://' + url;
    }
    return url;
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (faqRef.current && !faqRef.current.contains(event.target)) {
        hideFAQ();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="interactive-input" style={{ width: "100vw", height: "100vh", backgroundImage: `url(/BG.png)`, backgroundSize: "cover", backgroundPosition: "center", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
      <div className="search-bar-container">
        <input type="text" className="search-bar" placeholder="Enter your Link" value={inputText} onChange={handleInputChange} onKeyPress={handleKeyPress} />
        {prediction !== null && (
          <div className={`prediction ${prediction === "good" ? "good" : "bad"}`}>
            {prediction === "good" ? `This link is safe. Redirecting in ${redirectCountdown} seconds...` : "This link is phishing."}
          </div>
        )}
      </div>
      <div className={`plus-jakarta-sans plus-jakarta-sans-bold ${showFAQButton ? 'show' : 'hide'}`} style={{ position: "absolute", top: 90, left: 90 }} onClick={toggleFAQ}>PhisherX<span className="dot"></span></div>
      <div className="help-text">We are here to help to stay safe</div>
      <div className="faq-text" onClick={toggleFAQ}>#FAQ</div>
      {showFAQ && (
        <div className="faq-container" ref={faqRef}>
          <div className="faq-question">1: What is phishing?</div>
          <div className="faq-answer"> Phishing is a type of cyber attack where attackers impersonate legitimate entities to obtain sensitive information such as usernames, passwords, and credit card details.</div>
          <div className="faq-question">2: How do I recognize a phishing attempt?</div>
          <div className="faq-answer"> Phishing attempts often involve emails, messages, or websites that appear to be from trusted sources but contain suspicious links or requests for personal information. Be cautious of unexpected requests for sensitive information and verify the sender's identity if in doubt.</div>
          <div className="faq-question">3: What are common phishing techniques?</div>
          <div className="faq-answer"> Common phishing techniques include email phishing, where attackers send fraudulent emails posing as legitimate organizations; spear phishing, which targets specific individuals or organizations with personalized messages; and pharming, which redirects users to fraudulent websites.</div>
          <div className="faq-question">4: How can I protect myself from phishing attacks?</div>
          <div className="faq-answer"> To protect yourself from phishing attacks, be cautious of unsolicited emails or messages, avoid clicking on suspicious links or downloading attachments from unknown sources, regularly update your security software, and enable two-factor authentication for online accounts.</div>
          <div className="faq-question">5: What should I do if I suspect a phishing attempt?</div>
          <div className="faq-answer"> If you suspect a phishing attempt, do not respond to the email or click on any links. Instead, report the suspicious activity to the appropriate authorities, such as your organization's IT department or the Anti-Phishing Working Group (APWG).</div>
        </div>
      )}
      {/* Your other content here */}
    </div>
  );
};

export default InteractiveInput;
