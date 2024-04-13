// InteractiveInput.js

import React, { useState } from "react";
import "./css.css"; // Import your CSS file

const InteractiveInput = () => {
  const [showFAQ, setShowFAQ] = useState(false);

  const toggleFAQ = () => {
    setShowFAQ(!showFAQ);
  };

  return (
    <div className="interactive-input" style={{ width: "100vw", height: "100vh", backgroundImage: `url(/BG.png)`, backgroundSize: "cover", backgroundPosition: "center", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
      <div className="search-bar-container">
        <input type="text" className="search-bar" placeholder="Enter your Link" />
      </div>
      <div className="plus-jakarta-sans plus-jakarta-sans-bold" style={{ position: "absolute", top: 90, left: 90 }}>PhisherX<span className="dot"></span></div>
      <div className="help-text">We are here to help to stay safe</div>
      <div className="faq-text" onClick={toggleFAQ}>#FAQ</div>
      {showFAQ && (
        <div className="faq-container">
          <div className="faq-question">Question 1: What is phishing?</div>
          <div className="faq-answer">Answer 1: Phishing is a type of cyber attack where attackers impersonate legitimate entities to obtain sensitive information such as usernames, passwords, and credit card details.</div>
          <div className="faq-question">Question 2: How do I recognize a phishing attempt?</div>
          <div className="faq-answer">Answer 2: Phishing attempts often involve emails, messages, or websites that appear to be from trusted sources but contain suspicious links or requests for personal information. Be cautious of unexpected requests for sensitive information and verify the sender's identity if in doubt.</div>
          <div className="faq-question">Question 3: What are common phishing techniques?</div>
          <div className="faq-answer">Answer 3: Common phishing techniques include email phishing, where attackers send fraudulent emails posing as legitimate organizations; spear phishing, which targets specific individuals or organizations with personalized messages; and pharming, which redirects users to fraudulent websites.</div>
          <div className="faq-question">Question 4: How can I protect myself from phishing attacks?</div>
          <div className="faq-answer">Answer 4: To protect yourself from phishing attacks, be cautious of unsolicited emails or messages, avoid clicking on suspicious links or downloading attachments from unknown sources, regularly update your security software, and enable two-factor authentication for online accounts.</div>
          <div className="faq-question">Question 5: What should I do if I suspect a phishing attempt?</div>
          <div className="faq-answer">Answer 5: If you suspect a phishing attempt, do not respond to the email or click on any links. Instead, report the suspicious activity to the appropriate authorities, such as your organization's IT department or the Anti-Phishing Working Group (APWG).</div>
        </div>
      )}
      {/* Your other content here */}
    </div>
  );
};

export default InteractiveInput;
