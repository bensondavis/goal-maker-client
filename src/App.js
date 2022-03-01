import { useState, useEffect } from "react";

import Income from "./Income";

import "./App.css";
import Expense from "./Expense";
import Sum from "./Sum";
import CustomPopup from "./CustomPopup";
import convert from "./Convert";

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
  const [sumIncome, setSumIncome] = useState(0);
  const [sumExpense, setSumExpense] = useState(0);
  const [result, setResult] = useState("");
  const [visibility, setVisibility] = useState(false);

  const popupCloseHandler = (e) => {
    setVisibility(e);
  };

  function handleBalance(event) {
    setBankBalance(event.target.value);
  }

  function handleGoal(event) {
    setGoal(event.target.value);
  }

  function handleIncomes(income, i) {
    const newIncomes = [...incomes];
    newIncomes[i] = income;
    setIncomes(newIncomes);
  }

  function handleExpenses(expense, i) {
    const newExpenses = [...expenses];
    newExpenses[i] = expense;
    setExpenses(newExpenses);
  }

  function handleSubmit() {
    console.log("submit");

    const resI = Sum(incomes);
    const resE = Sum(expenses);

    console.log("resi = ", resI);
    console.log("resE = ", resE);
    setSumIncome(resI);
    setSumExpense(resE);

    let res = Math.floor((goal - bankBalance) / (resI - resE));
    setResult(convert(res));
    //alert(`result: ${result}`);
  }

  // useEffect(() => {
  //   console.log({ sumIncome });
  // }, [sumIncome]);

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
      <header className="App-header"></header>

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

        {/* <button onClick={handleSubmit}>submit</button> */}
        <button
          onClick={(e) => {
            setVisibility(!visibility);
            handleSubmit();
          }}
        >
          Submit
        </button>

        <CustomPopup
          onClose={popupCloseHandler}
          show={visibility}
          title="Result"
        >
          <h1></h1>
          <h2>Your goal can be achieved in {result}</h2>
        </CustomPopup>
      </div>
    </div>
  );
}

export default App;
