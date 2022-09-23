import DropDown from "./DropDown";
import TextField from "@mui/material/TextField";
import "../App.css";

const Income = ({ frequencyType, value, onChange, frequencies }) => {
  function handleChange(name, _value) {
    const income = { frequencyType, value, [name]: _value };
    onChange(income);
  }

  return (
    <div className="entry">
      <TextField
        label="Income Amount"
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

export default Income;
