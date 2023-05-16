import "../App.css";
import React, { useRef } from "react";
import logo from '../Images/savings.png'
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
