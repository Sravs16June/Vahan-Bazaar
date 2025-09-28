import React, { useState } from "react";
import "./CalculatorsPage.css";

const CalculatorsPage = () => {
  const [price, setPrice] = useState("");
  const [downPayment, setDownPayment] = useState("");
  const [rate, setRate] = useState("");
  const [tenure, setTenure] = useState("");
  const [emi, setEmi] = useState(null);

  const calculateEMI = () => {
    const P = price - downPayment;
    const r = rate / 12 / 100;
    const n = tenure * 12;
    const emiCalculated = (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    setEmi(emiCalculated.toFixed(0));
  };

  return (
    <div className="calculator-page">
      <h2>Bike Loan Calculator</h2>
      <div className="calculator-form">
        <input type="number" placeholder="Bike Price" value={price} onChange={(e) => setPrice(Number(e.target.value))} />
        <input type="number" placeholder="Down Payment" value={downPayment} onChange={(e) => setDownPayment(Number(e.target.value))} />
        <input type="number" placeholder="Interest Rate (%)" value={rate} onChange={(e) => setRate(Number(e.target.value))} />
        <input type="number" placeholder="Tenure (Years)" value={tenure} onChange={(e) => setTenure(Number(e.target.value))} />
        <button className="btn primary" onClick={calculateEMI}>Calculate EMI</button>
      </div>
      {emi && <p className="emi-result">Estimated EMI: ₹{emi} / month</p>}
    </div>
  );
};

export default CalculatorsPage;
