import React, { useState } from 'react';
import './Login.scss';
import { FaUser, FaLock } from 'react-icons/fa';
import axios from 'axios';
import Cookies from 'js-cookie';
import { Navigate, useNavigate } from 'react-router-dom';



const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate()


  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const response = await axios.post('https://epplus.azurewebsites.net/api/Auth/login', {
        email: username,
        password: password,
      });
      if(response.data.tokenString){
        Cookies.set('token',response.data.tokenString);
        //axios.defaults.withCredentials = true;
        navigate('/');
      }
    } catch (error) {
      console.error(error);
    }

    }


  return (
    <div className='wrapper'>
      <form onSubmit={handleSubmit}>
        <h1>Login</h1>
        <div className="input-box">
          <input type="text" placeholder="Username" required onChange={(e) => setUsername(e.target.value)}/>
          <FaUser className='icon'/>
        </div>
        <div className="input-box">
          <input type="password" placeholder="Password" required onChange={(e) => setPassword(e.target.value)}/>
          <FaLock className='icon'/>
        </div>

        <button type="submit">Login</button>
      </form>

    </div>
  );
};

export default LoginForm;