import { useState, useEffect } from "react";

import Income from "./Income";

import "./App.css";
import Expense from "./Expense";
import Sum from "./Sum";
import CustomPopup from "./CustomPopup";
import convert from "./Convert";

const frequencies = [
  { text: "Daily", value: "DAY" },
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
  const [safe, setSafe] = useState(false);
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
    const resI = Sum(incomes);
    const resE = Sum(expenses);

    const res = Math.round((goal - bankBalance) / (resI - resE));
    if (goal && bankBalance) {
      if(goal < bankBalance) {
        setSafe(true);
      }
    }
    setResult(convert(res, safe));
    setSafe(0);
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
      <header className="App-header flex justify-between pad">
        <img
          className="flex justify-center items align"
          src="./gg1.png"
          alt=""
        />
        <div className="flex items-align">
          <i class="gg-profile font-color m-20"></i>
          <button className="font-lato bg-color-branded-teal font-color border-none rounded-border pad font-bold">
            LOG OUT
          </button>
        </div>
      </header>
      <div className="body m-20 p-10 rounded-main">
        <ul>
          <li>
            <a class="btn" href="#">
              Details
            </a>
          </li>
        </ul>
        <label for="bankBalance">Current Balance:</label>
        <input
          class="form-styling"
          type="text"
          value={bankBalance}
          onChange={(e) => handleBalance(e)}
        />
        <div className="m-20"></div>
        <label for="incomeAmount">Income Amount:</label>
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

        <button class="add-button border-none pad" onClick={handleAddIncome}>
          <i class="gg-add"></i>
        </button>

        <label for="expenseAmount">expense amount:</label>
        {expenses.map(({ frequencyType, value }, i) => {
          return (
            <Expense
              class="form-styling"
              key={i}
              frequencies={frequencies}
              frequencyType={frequencyType}
              value={value}
              onChange={(expense) => handleExpenses(expense, i)}
            />
          );
        })}

        <button class="add-button border-none pad " onClick={handleAddExpense}>
          <i class="gg-add"></i>
        </button>

        <label for="goalAmount">Goal Amount:</label>
        <input
          class="form-styling"
          type="text"
          value={goal}
          onChange={(e) => handleGoal(e)}
        />
        <button
          className="border-none pad rounded-border m-auto font-size font-bold font-drop block"
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
          <h2>{result}</h2>
        </CustomPopup>
        <div class="bottom "></div>
      </div>
      <footer className="items-align flex justify-center">
        <p>&copy; 2022 ABCD Team</p>
      </footer>
    </div>
  );
}

export default App;
