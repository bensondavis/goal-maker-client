import DropDown from "./DropDown";
import TextField from "@mui/material/TextField";
import "../App.css";

const Expense = ({ frequencyType, value, onChange, frequencies }) => {
  function handleChange(name, _value) {
    const expense = { frequencyType, value, [name]: _value };
    onChange(expense);
  }

  return (
    <div className="entry">
      <TextField
        label="Expense Amount"
        value={value}
        variant="outlined"
        onChange={(e) => {
          handleChange("value", e.target.value);
        }}
      />

      <DropDown
        list={frequencies}
        selectedValue={frequencyType}
        onChange={(val) => handleChange("frequencyType", val)}
      />
    </div>
  );
};

export default Expense;
