import React from "react";

import "./Input.css";

const Input = ({ label, placeholder, onChange, value, name, type }) => {
  return (
    <div className='input'>
      <label htmlFor={name}>{label}</label>
      <input
        name={name}
        onChange={onChange}
        placeholder={placeholder}
        value={value}
        type={type}
      ></input>
    </div>
  );
};

export default Input;
