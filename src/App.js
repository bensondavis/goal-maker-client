import { useState } from "react";

import Income from "./Income";

import "./App.css";
import Expense from "./Expense";
import Sum from "./Sum";

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
    console.log(incomes);
    console.log(expenses);
    const res = Sum(incomes);
    console.log(res);
    setSumIncome(res);

    console.log({sumIncome});

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
      <header className="App-header flex justify-between pad">
      <img className="flex justify-center items align" src="./gg1.png" alt="" />
      <div className="flex items-align" >
      <i class="gg-profile font-color m-20"></i>
      <button className="font-lato bg-color-branded-teal font-color border-none rounded-border pad font-bold">LOG OUT</button>
      </div>
      </header>
        <div className="body m-20 p-10 rounded-main">
        <ul>
        <li><a class="btn">Details</a></li>
        </ul>
            <label for="bankBalance">Current Balance</label>
            <input class="form-styling"
              type="text"
              value={bankBalance}
              onChange={(e) => handleBalance(e)}
            />
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

            <button class="add-button border-none pad" onClick={handleAddIncome}><i class="gg-add"></i></button>
            <label for="expenseAmount">expense amount:</label>
            {expenses.map(({ frequencyType, value }, i) => {
              return (
                <Expense class="form-styling"
                  key={i}
                  frequencies={frequencies}
                  frequencyType={frequencyType}
                  value={value}
                  onChange={(expense) => handleExpenses(expense, i)}
                />
              );
            })}
            <button class="add-button border-none pad " onClick={handleAddIncome}><i class="gg-add"></i></button>
            <label for="goalAmount">Goal Amount:</label>
            <input class="form-styling" type="text" value={goal} onChange={(e) => handleGoal(e)} />
          <button class="border-none pad rounded-border m-auto font-size font-bold font-drop block"onClick={handleSubmit}>Submit</button>
          <div class="bottom ">
          </div>
        </div>
    </div>
  );
}

export default App;
