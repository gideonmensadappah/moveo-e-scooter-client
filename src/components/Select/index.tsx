import { FC } from "react";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Box from "@mui/material/Box";
import NativeSelect from "@mui/material/NativeSelect";

type Props<T = string> = {
  value: T;
  label?: string;
  options: Array<Option<T>>;
  handleChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};

type Option<T> = { label: string; value: T };
const sxStyle = { minWidth: 120 };
const CostumSelect: FC<Props> = ({ handleChange, label, value, options }) => {
  return (
    <div>
      <Box sx={sxStyle}>
        <FormControl fullWidth>
          <InputLabel variant='standard' htmlFor='uncontrolled-native'>
            {label}
          </InputLabel>

          <NativeSelect
            onChange={handleChange}
            defaultValue={value}
            inputProps={{
              id: "uncontrolled-native",
            }}
          >
            {options.map((option) => (
              <option value={option.value}>{option.label}</option>
            ))}
          </NativeSelect>
        </FormControl>
      </Box>
    </div>
  );
};

export default CostumSelect;
