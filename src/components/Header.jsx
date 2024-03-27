import investmentCalculatorLogo from "../assets/investment-calculator-logo.png";

export default function Header() {
  return (
    <header id="header">
      <img src={investmentCalculatorLogo} alt="investmentCalculatorLog" />
      <h1>Investment calculator</h1>
    </header>
  );
}
