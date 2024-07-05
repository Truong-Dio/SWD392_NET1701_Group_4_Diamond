import React, { useState } from "react";
import axios from "axios";
import { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import 'F:/Semester7/fe_thien/src/assets/css/templatemo-style.css'


const Login = ({ setIsLoggedIn }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      console.log('Sending login request', { email, password });

      const response = await axios.post(
        'https://diamondstoresystemwebapi.azurewebsites.net/api/Auth/Login', 
        null,
        {
          params: {
            email: email,
            password: password
          },
          headers: {
            'Content-Type': 'application/json',
            'accept': '*/*'
          }
        }
      );

      console.log('Response from API:', response);

      
      localStorage.setItem('token', response.data);

      
      setIsLoggedIn(true);

     
      navigate('/diamond');
    } catch (error) {
      console.error('Login error:', error);
      if (error.response) {
        
        setError(`Login failed: ${error.response.data.message}`);
      } else if (error.request) {
        
        setError('No response from server. Please try again later.');
      } else {
        
        setError(`Error: ${error.message}`);
      }
    }
  };

  return (
<Fragment>
      <div>
        <nav className="navbar navbar-expand-xl navbar-dark bg-dark">
          <div className="container">
            <a className="navbar-brand" href="/login">Diamond System</a>
          </div>
        </nav>
      </div>

      <div className="container mt-5">
        <div className="row">
          <div className="col-lg-6 mx-auto">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title text-center">Manager Login</h5>
                <form onSubmit={handleLogin}>
                  <div className="form-group">
                  <label htmlFor="email" className="text-black">
                    <FontAwesomeIcon icon={faEnvelope}  />
                    Email
                  </label>
                    <input
                      name="email"
                      type="email"
                      className="form-control"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <div className="form-group">
                  <label htmlFor="password">
                    <FontAwesomeIcon icon={faLock} className="text-black" />
                    Password
                  </label>
                    <input
                      name="password"
                      type="password"
                      className="form-control"
                      id="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>
                  {error && <p className="text-danger">{error}</p>}
                  <div className="form-group mt-4">
                    <button
                      type="submit"
                      className="btn btn-primary btn-block text-uppercase"
                    >
                      Login
                    </button>
                  </div>
                  <button className="btn btn-link btn-block">
                    Forgot your password?
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Login;
