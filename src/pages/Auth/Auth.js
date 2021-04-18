import React, { useState } from "react";
import Input from "../../components/Input/Input";
import axios from "axios";

import "./Auth.css";

const AuthPage = () => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const onChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };

  const loginUser = async (e) => {
    e.preventDefault();

    if (!userData.email || !userData.password) {
      //error can be user to show user a message that all fields are required(pass as prop at input component to be more easy for styling)
      return setError("All fields are required");
    }

    axios
      .post("http://localhost:4000/auth", {
        email: userData.email,
        password: userData.password,
      })
      .then((res) => {
        localStorage.setItem("token", res.data.token);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className='auth'>
      <form onSubmit={loginUser} className='login auth-area'>
        <h1>Login</h1>
        <Input
          onChange={onChange}
          label='email'
          placeholder='Email'
          name='email'
          value={userData.email}
        />
        <Input
          onChange={onChange}
          label='password'
          placeholder='Password'
          name='password'
          value={userData.password}
          type='password'
        />
        <button type='submit' className='login-button'>
          Login
        </button>
      </form>
      <form className='signup auth-area'>
        <h1>Sign Up</h1>
        <Input
          onChange={onChange}
          label='email'
          placeholder='Email'
          name='email'
        />
        <Input
          onChange={onChange}
          label='password'
          placeholder='Password'
          name='password'
        />
        <button type='submit' className='signup-button'>
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default AuthPage;
