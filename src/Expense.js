import DropDown from "./DropDown";

const Expense = ({ frequencyType, value, onChange, frequencies }) => {
    
  function handleChange(name, _value) {
    const expense = { frequencyType, value, [name]: _value };
    console.log({expense})
    onChange(expense);
  }
  
  return (
    <div>
      <DropDown
        list={frequencies}
        selectedValue={frequencyType}
        onChange={(val) => handleChange("frequencyType", val)}
      />
      <input
        type="text"
        value={value}
        onChange={(e) => handleChange("value", e.target.value)}
      />
    </div>
  );
};

export default Expense;
