import "../App.css";
import React, { useRef } from "react";
import logo from '../Images/savings.png'
import axios from 'axios';

function logout()
  {
    axios.get("http://127.0.0.1:8000/skarbonka/my/").then(function (response) {
      localStorage.removeItem("token");
      window.location.reload(false);
    });
  }
const Navbar = (props) => {
  const loginButton = useRef(null);
  const registerButton = useRef(null);
  const handleLoginClick = () => {
    props.handleLoginClick();
  };
  const handleRegisterClick = () => {
    props.handleRegisterClick();
  };

  return (
    <div className="navbar-container">
      <div className ="title-content">
      <p>SKARBONKA</p> 
      
      <img src={logo} alt="Piggy bank icon"></img>
      </div>
      <button type="submit" className="passwordReset-button" onClick={logout} >
        Logout
      </button>
      <div className="button-container">
      <button
        ref={loginButton}
        className="login-content"
        onClick={handleLoginClick}
      >
        Logowanie
      </button>
      <button
        ref={registerButton}
        className="register-content"
        onClick={handleRegisterClick}
      >
        Rejestracja
      </button>
      </div>
    </div>
  );
};
export default Navbar;
