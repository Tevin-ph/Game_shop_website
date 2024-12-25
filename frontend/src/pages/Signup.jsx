import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Signup.css';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/users/signup", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({ name, email, password }),
});

      
  
      const data = await response.json();
  
      if (response.ok) {
        alert("Signup successful!");
      } else {
        alert(data.message || "Signup failed!");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred. Please try again.");
      throw error;
    }
  };
  

  return (
    <div className="form-container" id="signup">
      <h1>Welcome to Game Shop</h1>
      <p>Sign Up to create your Game Shop Account</p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Your Name *</label>
        <input
          type="text"
          id="first-name"
          placeholder="Enter Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <label htmlFor="email">Email Address *</label>
        <input
          type="email"
          id="email"
          placeholder="Enter Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label htmlFor="pass">Password *</label>
        <input
          type="password"
          id="pass"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit" className="btn-signup">SIGN UP</button>
      </form>
      <p>{message}</p>
      <p className="log-in">
        Already have an Account? <Link to={"/login"}>Log In Now </Link>
      </p>
    </div>
  );
};

export default Signup;
