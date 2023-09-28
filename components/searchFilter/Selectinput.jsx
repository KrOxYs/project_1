import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { WidthNormal } from "@mui/icons-material";
import { SiGooglemaps } from "react-icons/si";

const names = [
  {
    city: "Jakarta",
    kab: "Jawa",
    total: "1200",
  },
  {
    city: " Bali",
    kab: "pantai kuta",
    total: "5000",
  },
  {
    city: "Puncak",
    kab: "Bogor",
    total: "2000",
  },
  {
    city: "Yogyakarta",
    kab: "Jawa Tengah",
    total: "1000",
  },
];

export default function BasicSelect() {
  const [name, setName] = React.useState("");

  const handleChange = (event) => {
    setName(event.target.value);
  };
  console.log(name);

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl sx={{ width: 800 }}>
        <InputLabel id="" className=" ml-3">
          Tempat Tujuan
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={name}
          label="Age"
          onChange={handleChange}
          renderValue={(value) => `${"__"}${value}`}
          MenuProps={{
            PaperProps: {
              sx: { width: 200 },
            },
          }}
          style={{}}
        >
          {names.map((name) => (
            <MenuItem
              key={name.city}
              value={name.city}
              className=" space-x-3 ml-3"
            >
              <div className=" ml-3">{name.city}</div>
              <div>{name.kab}</div>
              <div>{name.total}</div>
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}
