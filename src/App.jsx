import { useState } from "react";
import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Results from "./components/Results";
// import Table from "./components/Table";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 1000,
    annualInvestment: 1200,
    expectedReturn: 5,
    duration: 10,
  });
  const validData = userInput.duration >= 1;
  function handleChange(name, value) {
    setUserInput((prevValues) => ({
      ...prevValues,
      [name]: +value,
    }));
  }
  return (
    <>
      <Header />
      <UserInput userInput={userInput} onChange={handleChange} />
      {/* {userInput.duration < 1 ? (
        <p className="center">Please enter valid data </p>
      ) : (
        <Results input={userInput} />
      )} */}
      {!validData && <p className="center">Please enter valid data </p>}
      {validData && <Results input={userInput} />}
    </>
  );
}

export default App;
