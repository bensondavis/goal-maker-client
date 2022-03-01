import DropDown from "./DropDown";

const Income = ({ frequencyType, value, onChange, frequencies }) => {
  function handleChange(name, _value) {
    const income = { frequencyType, value, [name]: _value };
    onChange(income);
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

export default Income;
