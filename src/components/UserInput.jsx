export default function UserInput({ userInput, onChange }) {
  return (
    // <div className="input-group">
    //   {inputs.map((input) => (
    //     <div key={input.id}>
    //       <label htmlFor={input.id}>{input.label}</label>
    //       <input
    //         type={input.type}
    //         required={input.required}
    //         id={input.id}
    //         onChange={(e) => handleChange(input.id, e.target.value)}
    //       />
    //     </div>
    //   ))}
    // </div>
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Initial Investment</label>
          <input
            type="number"
            value={userInput.initialInvestment}
            required
            onChange={(e) => onChange("initialInvestment", e.target.value)}
          />
        </p>
        <p>
          <label>Annual Investment</label>
          <input
            type="number"
            value={userInput.annualInvestment}
            required
            onChange={(e) => onChange("annualInvestment", e.target.value)}
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>Expected Return</label>
          <input
            type="number"
            value={userInput.expectedReturn}
            required
            onChange={(e) => onChange("expectedReturn", e.target.value)}
          />
        </p>
        <p>
          <label>Duration</label>
          <input
            type="number"
            value={userInput.duration}
            required
            onChange={(e) => onChange("duration", e.target.value)}
          />
        </p>
      </div>
    </section>
  );
}
