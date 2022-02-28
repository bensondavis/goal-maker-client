import { useState } from "react";

import Income from "./Income";

import "./App.css";
import Expense from "./Expense";

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
  const [expenses, setExpenses] = useState([
    { frequencyType: "MONTHLY", value: "" },
  ]);

  function handleBalance(event) {
    setBankBalance(event.target.value);
  }

  function handleGoal(event) {
    setGoal(event.target.value);
  }

  function handleIncomes(income, i) {
    console.log(income, i);
    const newIncomes = [...incomes];
    newIncomes[i] = income;
    setIncomes(newIncomes);
  }

  function handleExpenses(expense, i) {
    console.log(expense, i);
    const newExpenses = [...expenses];
    newExpenses[i] = expense;
    setExpenses(newExpenses);
  }

  function handleSubmit() {
    console.log(incomes);
    console.log(expenses);
    // const result = (goal - bankBalance) / (incomes - expenses);
    // alert(`result: ${result}`);
  }

  function handleAddIncome() {
    const newIncomes = [...incomes, { frequencyType: "MONTHLY", value: "" }];
    setIncomes(newIncomes);
  }

  function handleAddExpense() {
    const newExpenses = [...expenses, { frequencyType: "MONTHLY", value: "" }];
    setExpenses(newExpenses);
  }

  return (
    <div className="App">
      <header className="App-header">
        
      </header>
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

            <button onClick={handleAddIncome}>add</button>
          </div>
          <div>
            <h4>expense amount:</h4>
            {expenses.map(({ frequencyType, value }, i) => {
              return (
                <Expense
                  key={i}
                  frequencies={frequencies}
                  frequencyType={frequencyType}
                  value={value}
                  onChange={(expense) => handleExpenses(expense, i)}
                />
              );
            })}
            <button onClick={handleAddExpense}>add</button>
          </div>
          <div>
            <h4>goal amount:</h4>
            <input type="text" value={goal} onChange={(e) => handleGoal(e)} />
          </div>

          <button onClick={handleSubmit}>submit</button>
        </div>
    </div>
  );
}

export default App;
