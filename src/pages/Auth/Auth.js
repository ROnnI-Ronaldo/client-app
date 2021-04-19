import React, { useState } from "react";
import Input from "../../components/Input/Input";
import axios from "axios";
import { useDispatch } from "react-redux";
import { authenticateUser } from "../../redux/User/userAction";

import "./Auth.css";

const AuthPage = () => {
  const dispatch = useDispatch();
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const [userDataRegister, setUserDataRegister] = useState({
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

  const onChangeRegister = (e) => {
    setUserDataRegister({
      ...userDataRegister,
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
      .post("https://populate-app-mern.herokuapp.com/auth", {
        email: userData.email,
        password: userData.password,
      })
      .then((res) => {
        dispatch(authenticateUser(res.data.token));
      })
      .catch((err) => {
        alert(err.response.data.msg);
      });
  };

  const signupUser = async (e) => {
    e.preventDefault();

    if (!userDataRegister.email || !userDataRegister.password) {
      //error can be user to show user a message that all fields are required(pass as prop at input component to be more easy for styling)
      return setError("All fields are required");
    }

    axios
      .post("https://populate-app-mern.herokuapp.com/register", {
        email: userDataRegister.email,
        password: userDataRegister.password,
      })
      .then((res) => {
        if (res.status === 201) {
          alert("User created successfully. Login Now");
        } else {
          alert(res.msg);
        }
      })
      .catch((err) => {
        alert(err.response.data.msg);
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
      <form onSubmit={signupUser} className='signup auth-area'>
        <h1>Sign Up</h1>
        <Input
          onChange={onChangeRegister}
          label='email'
          placeholder='Email'
          name='email'
          value={userDataRegister.email}
        />
        <Input
          onChange={onChangeRegister}
          label='password'
          placeholder='Password'
          name='password'
          type='password'
          value={userDataRegister.password}
        />
        <button type='submit' className='signup-button'>
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default AuthPage;
