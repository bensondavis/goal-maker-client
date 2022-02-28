import { useState } from "react";

import Income from "./Income";

import "./App.css";

const frequencies = [
  { text: "Day", value: "DAY" },
  { text: "Weekly", value: "WEEKLY" },
  { text: "Monthly", value: "MONTHLY" },
  { text: "Yearly", value: "YEARLY" },
];

function App() {
  const [bankBalance, setBankBalance] = useState("");
  const [goal, setGoal] = useState("");
  const [incomes, setIncomes] = useState([
    { frequencyType: "MONTHLY", value: "" },
  ]);
  const [expenses, setExpenses] = useState([""]);

  function handleBalance(event) {
    setBankBalance(event.target.value);
  }

  function handleGoal(event) {
    setGoal(event.target.value);
  }

  function handleIncomes(income, i) {
    console.log(income,i);
    const newIncomes = [...incomes];
    newIncomes[i] = income;
    setIncomes(newIncomes);
  }

  function handleExpenses(event) {
    setExpenses(event.target.value);
  }

  function handleSubmit() {
    console.log(incomes)
    // const result = (goal - bankBalance) / (incomes - expenses);
    // alert(`result: ${result}`);
  }

  function handleAdd() {
    const newIncomes = [...incomes, { frequencyType: "MONTHLY", value: "" }];
    setIncomes(newIncomes);
  }

  return (
    <div className="App">
      <header className="App-header">
        <div className="body">
          <div>
            <h4>Bank Balance:</h4>
            <input
              type="text"
              value={bankBalance}
              onChange={(e) => handleBalance(e)}
            />
          </div>
          <div>
            <h4>income amount:</h4>
            {incomes.map(({ frequencyType, value }, i) => {
              return (
                <Income
                  key={i}
                  frequencies={frequencies}
                  frequencyType={frequencyType}
                  value={value}
                  onChange={(income) => handleIncomes(income, i)}
                />
              );
            })}

            <button onClick={handleAdd}>add</button>
          </div>
          <div>
            expense amount:
            {/* <input type="text" value={expense} onChange={(e)=> handleExpense(e)}/> */}
          </div>
          <div>
            goal amount:
            <input type="text" value={goal} onChange={(e) => handleGoal(e)} />
          </div>

          <button onClick={handleSubmit}>submit</button>
        </div>
      </header>
    </div>
  );
}

export default App;
