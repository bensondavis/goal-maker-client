import DropDown from "./DropDown";
import "./App.css";
const Expense = ({ frequencyType, value, onChange, frequencies }) => {
    
  function handleChange(name, _value) {
    const expense = { frequencyType, value, [name]: _value };
    onChange(expense);
  }
  
  return (
    <div>
      <DropDown
        list={frequencies}
        selectedValue={frequencyType}
        onChange={(val) => handleChange("frequencyType", val)}
      />
      <input class="form-styling"
        type="text"
        value={value}
        onChange={(e) => handleChange("value", e.target.value)}
      />
    </div>
  );
};

export default Expense;