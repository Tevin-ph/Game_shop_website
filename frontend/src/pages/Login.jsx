import React from 'react';
import { Link } from 'react-router-dom'; // Ensure to import Link from react-router-dom
import './Login.css'

export default function Login() {
  return (
    <div className="form-container">
      <h1>Welcome to Game Shop</h1>
      <p>Login to your Game Shop Account</p>
      <form>
        <label htmlFor="name">Username *</label>
        <input type="text" id="name" placeholder="Enter Username" required />

        <label htmlFor="pass">Password *</label>
        <input type="password" id="pass" placeholder="Enter Password" required />

        <button type="submit" className="btn-login">LOGIN</button>
      </form>
      <p className="new-account">New here? <Link to="/signup">Sign Up Now</Link></p>
    </div>
  );
}
