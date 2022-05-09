import { MenuItem } from "@mui/material";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";

const DropDown = ({ list, onChange, selectedValue }) => {
  return (
    <FormControl sx={{ m: 1, minWidth: 100 }} size="small">
      <Select
        autoWidth
        value={selectedValue}
        onChange={(e) => onChange(e.target.value)}
      >
        {list.map((item, i) => (
          <MenuItem key={i} value={item.value}>
            {item.text}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default DropDown;
