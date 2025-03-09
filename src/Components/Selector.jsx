import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function Selector({ tower, setTower }) {

  const handleChange = (event) => {
    setTower(event.target.value);
  };

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 80 }}>
        <InputLabel id="demo-simple-select-autowidth-label">Tower</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={tower ?? ""}
          onChange={handleChange}
          autoWidth
          label="Tower"
        >
          <MenuItem value={"Tower 1"}>Tower 1</MenuItem>
          <MenuItem value={"Tower 2"}>Tower 2</MenuItem>
          <MenuItem value={"Tower 3"}>Tower 3</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}

