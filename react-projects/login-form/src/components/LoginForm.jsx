import React, { useState } from 'react';
import './LoginForm.css'

const LoginForm = () => {
  const [enteredUsername, setEnteredUsername] = useState('');
  const [enteredPassword, setEnteredPassword] = useState('');

  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };

  const passwordChangeHandler = (event) => {
    setEnteredPassword(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const userData = {
      username: enteredUsername,
      password: enteredPassword,
    };
      
    alert(userData.username + "\n" + userData.password);    
  };


  const resetHandler = () => {
    setEnteredUsername("");
    setEnteredPassword("");
  }

  return (
    <form>
      <h1>Login</h1>
      
        <input
          type="text"
          className="namePass"
          id="exampleInputUsername1"
          placeholder="username"
          value={enteredUsername}
          onChange={usernameChangeHandler}
        />
        <input
          type="password"
          className="namePass"
          id="exampleInputPassword1"
          placeholder="password"
          value={enteredPassword}
          onChange={passwordChangeHandler}
        />

      <input 
          type="submit" 
          className="login" 
          onClick={submitHandler}
          value ='login'
      />
      <input 
          type="submit" 
          className='reset' 
          onClick={resetHandler}
          value = 'reset'
      />
    </form>
  );
};

export default LoginForm;