import { FormControl, InputLabel, MenuItem, Select } from '@material-ui/core';
import React from 'react';

export default function Card(props) {
  return (
    <div className="card container">
      {/* <div className="title">{props.brand}</div> */}
      <img src={props.logo} alt="logo" />
      <div className="sale">Up To 50% Off</div>

      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Stores</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          // value={props.stores[0]}
          label="Stores"
          // onChange={handleChange}
        >
          {props.stores.map((store) => (
            <MenuItem value={store}>{store}</MenuItem>
          ))}
        </Select>
      </FormControl>
      <div className="terms">*T&C Apply</div>
    </div>
  );
}
