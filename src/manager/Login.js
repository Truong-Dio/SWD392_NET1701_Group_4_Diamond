import React, { useState } from "react";
import axios from "axios";
import { Fragment } from "react";
import { useNavigate, Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import 'C:/Users/thien/Desktop/fe_thien/src/assets/css/templatemo-style.css';
import 'C:/Users/thien/Desktop/fe_thien/src/assets/css/bootstrap.min.css'


const VideoBackground = () => (
  <video autoPlay loop muted className="video-background">
    <source src="/videos/background.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>
);

const Login = ({ setIsLoggedIn }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      console.log('Sending login request', { email, password });
  
      // Gửi yêu cầu đăng nhập
      const response = await axios.post(
        'https://dss-cactgjg2a9ascrek.southeastasia-01.azurewebsites.net/api/Auth/Login', 
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
  
      // Lưu token vào localStorage
      localStorage.setItem('token', response.data);
  
      // Lấy thông tin tài khoản
      const accountResponse = await axios.get(
        'https://dss-cactgjg2a9ascrek.southeastasia-01.azurewebsites.net/api/Accounts/GetAll',
        {
          headers: {
            'Authorization': `Bearer ${response.data}`
          }
        }
      );
  
      console.log('Account data:', accountResponse);
  
      // Tìm tài khoản dựa trên email
      const user = accountResponse.data.data.find(user => user.email === email);
  
      if (user) {
        setIsLoggedIn(true);
        localStorage.setItem('accountID', user.accountID);
  
        // Điều hướng dựa trên vai trò của người dùng
        switch(user.role) {
          case 'CUSTOMER':
            navigate('/diamondlist'); // Điều hướng đến danh sách kim cương cho khách hàng
            break;
          case 'STAFF':
            navigate('/profile'); // Điều hướng đến trang hồ sơ cho nhân viên
            break;
          case 'MANAGER':
            navigate('/index'); // Điều hướng đến trang chính cho quản lý
            break;
          case 'ADMIN':
            navigate('/diamond'); // Điều hướng đến trang quản lý kim cương cho admin
            break;
          default:
            setError('Invalid role.'); // Xử lý trường hợp vai trò không hợp lệ
        }
      } else {
        setError('User not found.');
      }
  
    } catch (error) {
      console.error('Login error:', error);
      if (error.response) {
        const errorMessage = typeof error.response.data === 'string'
          ? error.response.data
          : JSON.stringify(error.response.data);
        setError(`Login failed: ${errorMessage}`);
      } else if (error.request) {
        setError('No response from server. Please try again later.');
      } else {
        setError(`Error: ${error.message}`);
      }
    }
  };
  

  return (
    <Fragment>
      {/* Video background */}
      <div className="video-container">
        <VideoBackground />
      </div>

      <div className="login-container">
        <nav className="navbar navbar-expand-xl navbar-dark bg-dark">
          <div className="container">
            <a className="navbar-brand" href="/login">Diamond System</a>
          </div>
        </nav>

        <div className="container mt-5">
          <div className="row">
            <div className="col-lg-6 mx-auto">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title text-center">Manager Login</h5>
                  <form onSubmit={handleLogin}>
                    <div className="form-group">
                      <label htmlFor="email" className="text-black">
                        <FontAwesomeIcon icon={faEnvelope} />
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
                    <Link to="/forgot-password" className="btn btn-link btn-block">
                      Forgot your password?
                    </Link>
                    <Link to="/homepage" className="btn btn-link btn-block">
                      Visit HomePage
                    </Link>
                    <Link to="/sign-up" className="btn btn-link btn-block">
                      Sign Up
                    </Link>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Login;
