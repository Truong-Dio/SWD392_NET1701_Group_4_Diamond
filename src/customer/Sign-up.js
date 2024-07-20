import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid"; // Import UUID library
import 'C:/Users/thien/Desktop/fe_thien/src/assets/css/SignUp.css'

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [lastName, setLastName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [gender, setGender] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSignUpSuccess, setIsSignUpSuccess] = useState(false);

  const handleSignUp = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const genderValue = gender === "0" ? 0 : 1;

    // tao accountId tự động
    const accountID = uuidv4();

    try {
      const response = await axios.post(
        "https://dss-cactgjg2a9ascrek.southeastasia-01.azurewebsites.net/api/Accounts/Create",
        {
          accountID,
          email,
          password,
          lastName,
          firstName,
          phone,
          address,
          gender: genderValue, 
          dob: new Date().toISOString(), 
          joinDate: new Date().toISOString(),
          loyaltyPoint: 0,
          role: 0,
          workingSchedule: 0,
        }
      );
      console.log("Registration successful:", response);
      setIsSignUpSuccess(true);
      setError(""); // clear error
    } catch (error) {
      console.error("Registration failed:", error);
      if (error.response) {
        setError(
          `Registration failed: ${
            error.response.data.message || JSON.stringify(error.response.data)
          }`
        );
      } else {
        setError(`Registration failed: ${error.message}`);
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
      <form className="signup-form" onSubmit={handleSignUp}>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <label>Last Name:</label>
        <input
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
        />
        <label>First Name:</label>
        <input
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
        />
        <label>Phone:</label>
        <input
          type="text"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />
        <label>Address:</label>
        <input
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          required
        />
        <label>Gender:</label>
        <select
          value={gender}
          onChange={(e) => setGender(e.target.value)}
          required
        >
          <option value="">Select gender</option>
          <option value="0">Male</option>
          <option value="1">Female</option>
        </select>
        {error && <p className="error-message">{error}</p>}
        <button className="signup-button" type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Signing Up..." : "Sign Up"}
        </button>
      </form>
      {isSignUpSuccess && (
        <p className="success-message">Registration successful. Please <Link to="/login">login</Link> to continue.</p>
      )}
      <p className="login-link">
        Already have an account? <Link to="/login">Login here</Link>.
      </p>
    </div>
  );
};

export default SignUp;
