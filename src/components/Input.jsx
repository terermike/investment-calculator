import { useState } from "react";
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
const investments = {
  initialInvestment: "",
  annualInvestment: "",
  expectedReturn: "",
  duration: "",
};
export default function Input() {
  const [investment, setInvestment] = useState(investments);

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
          <input type={input.type} requred={input.required} id={input.id} />
        </div>
      ))}
    </div>
  );
}
