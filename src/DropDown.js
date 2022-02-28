const DropDown = ({ list, onChange, selectedValue }) => {
  return (
    <select onChange={(e)=>onChange(e.target.value)}>
      {list.map((item, i) => (
        <option
          key={i}
          value={item.value}
          selected={item.value === selectedValue}
        >
          {item.text}
        </option>
      ))}
    </select>
  );
};

export default DropDown;
