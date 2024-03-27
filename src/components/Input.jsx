import { useState } from "react";

export default function Input({ setInvestment }) {
  const inputs = [
    {
      id: "initialInvestment",
      label: "Initial Investment",
      type: "number",
      required: "required",
    },
    {
      id: "annualInvestment",
      label: "Annual Investment",
      type: "number",
      required: "required",
    },
    {
      id: "expectedReturn",
      label: "Expected Return",
      type: "number",
      required: "required",
    },
    { id: "duration", label: "Duration", type: "number", required: "required" },
  ];

  function handleBlur(name, value) {
    setInvestment((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  }
  return (
    <div className="input-group">
      {inputs.map((input) => (
        <div key={input.id}>
          <label htmlFor={input.id}>{input.label}</label>
          <input
            type={input.type}
            required={input.required}
            id={input.id}
            onBlur={(e) => handleBlur(input.id, e.target.value)}
          />
        </div>
      ))}
    </div>
  );
}
