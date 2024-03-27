import { useState } from "react";
import Header from "./components/Header";
import Input from "./components/Input";
import Table from "./components/Table";

function App() {
  const investments = {
    initialInvestment: 1000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  };

  const [investment, setInvestment] = useState(investments);
  console.log(investment);
  return (
    <>
      <Header />
      <div id="user-input">
        <Input setInvestment={setInvestment} />
      </div>
      <div>
        <Table investment={investment} />
      </div>
    </>
  );
}

export default App;
