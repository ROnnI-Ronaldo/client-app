import React from "react";

const Select = ({ values, onChange }) => (
  <select onChange={onChange}>
    {values &&
      values.map((val) => (
        <option key={val.value} value={val.value}>
          {val.label}
        </option>
      ))}
  </select>
);

export default Select;
