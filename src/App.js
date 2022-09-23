import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";
import Income from "./Components/Income";
import Expense from "./Components/Expense";
import Sum from "./Functions/Sum";
import Difference from "./Functions/Difference";
import { findGoal } from "./Functions/FindGoal";
import ResultDialog from "./Components/Popup/ResultDialog";
import DenseAppBar from "./Components/AppBar";
import "./App.css";
import { Stack } from "@mui/material";

const frequencies = [
  { text: "Daily", value: "DAY" },
  { text: "Weekly", value: "WEEKLY" },
  { text: "Monthly", value: "MONTHLY" },
  { text: "Yearly", value: "YEARLY" },
];

const App = () => {
  const [bankBalance, setBankBalance] = useState("");
  const [goal, setGoal] = useState("");
  const [incomes, setIncomes] = useState([
    { frequencyType: "MONTHLY", value: "" },
  ]);
  const [expenses, setExpenses] = useState([
    { frequencyType: "MONTHLY", value: "" },
  ]);
  const [result, setResult] = useState("");
  const [open, setOpen] = useState(false);

  const handleOpenstatus = (e) => {
    setOpen(e);
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
    const dataIncome = Sum(incomes);
    const dataExpense = Sum(expenses);
    const data = Difference(dataIncome, dataExpense);
    const result = findGoal(data, goal, bankBalance);
    setResult(result);
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
    <div className="app">
      <DenseAppBar />
      <Stack
        className="centering"
        direction={"column"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <TextField
          label="Current Balance"
          variant="outlined"
          value={bankBalance}
          onChange={(e) => handleBalance(e)}
          sx={{ mt: 2, mb: 2, ml: -15 }}
        />

        <div>
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
          <AddCircleRoundedIcon
            onClick={handleAddIncome}
            color="primary"
            fontSize="large"
            sx={{ m: 2, ml: 24 }}
          />
        </div>

        <div>
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
          <AddCircleRoundedIcon
            onClick={handleAddExpense}
            color="primary"
            fontSize="large"
            sx={{ m: 2, ml: 24 }}
          />
        </div>

        <TextField
          label="Goal Amount"
          variant="outlined"
          value={goal}
          onChange={(e) => handleGoal(e)}
          sx={{ mt: 2, mb: 2, ml: -15 }}
        />

        <Button
          variant="contained"
          sx={{ m: 2, ml: -13 }}
          className="submit-button"
          onClick={() => {
            handleSubmit();
            setOpen(!open);
          }}
        >
          SUBMIT
        </Button>
      </Stack>

      <ResultDialog
        result={result}
        openStatus={open}
        onClosing={handleOpenstatus}
      />
    </div>
  );
};

export default App;
