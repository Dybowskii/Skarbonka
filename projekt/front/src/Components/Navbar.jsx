import "../App.css";
import React, { useRef } from "react";
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
  );
};
export default Navbar;
