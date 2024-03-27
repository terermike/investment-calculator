import React from "react";
import { calculateInvestmentResults, formatter } from "../util/investment"; // Import the necessary functions

export default function Table({ investment }) {
  const calculatedData = calculateInvestmentResults(investment);

  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (year)</th>
          <th>Total Interest</th>
          <th>Investment Capital</th>
        </tr>
      </thead>
      <tbody>
        {calculatedData.map((data, index) => {
          const { year, interest, valueEndOfYear, annualInvestment } =
            calculateData;

          return (
            <tr key={index}>
              <td>{year}</td>
              <td>{formatter.format(valueEndOfYear)}</td>{" "}
              {/* Format investment value */}
              <td>{formatter.format(interest)}</td> {/* Format interest */}
              <td>{formatter.format(interest * year)}</td>{" "}
              {/* Calculate and format total interest */}
              <td>{formatter.format(annualInvestment * year)}</td>{" "}
              {/* Calculate and format investment capital */}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
