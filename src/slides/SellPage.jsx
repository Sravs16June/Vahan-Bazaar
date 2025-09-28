import React, { useState } from "react";
import "./SellPage.css";

const SellPage = () => {
  const [step, setStep] = useState(1);

  return (
    <div className="sell-page">
      <h2>Sell Your Bike</h2>
      <div className="steps">
        <div className={`step ${step >= 1 ? "active" : ""}`}>1</div>
        <div className={`step ${step >= 2 ? "active" : ""}`}>2</div>
        <div className={`step ${step >= 3 ? "active" : ""}`}>3</div>
      </div>

      {step === 1 && (
        <div className="form-step">
          <input type="text" placeholder="Brand" />
          <input type="text" placeholder="Model" />
          <input type="number" placeholder="Year" />
          <button className="btn primary" onClick={() => setStep(2)}>Next</button>
        </div>
      )}

      {step === 2 && (
        <div className="form-step">
          <input type="number" placeholder="Price" />
          <input type="file" />
          <button className="btn secondary" onClick={() => setStep(1)}>Back</button>
          <button className="btn primary" onClick={() => setStep(3)}>Next</button>
        </div>
      )}

      {step === 3 && (
        <div className="form-step">
          <p>Review your bike details and submit</p>
          <button className="btn secondary" onClick={() => setStep(2)}>Back</button>
          <button className="btn primary">Submit</button>
        </div>
      )}
    </div>
  );
};

export default SellPage;
