import "./App.css";
import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import Header from "./Components/Header";
import Login from "./Components/Login";
import Register from "./Components/Register";

function NavigationBar(props) {
  const isLoggedIn = props.isLoggedIn;
  const isLoginVisible = props.isLoginVisible;

  if (isLoggedIn) {
    return (
      <div>
        <Header header="Logowanie" />
        {isLoginVisible && <Login />}
      </div>
    );
  }
  return (
    <div>
      <Header header="Rejestracja" />
      {!isLoginVisible && <Register />}
    </div>
  );
}

function App() {
  const [isClicked, setIsClicked] = useState(true);
  const [isLoginVisible, setIsLoginVisible] = useState(true);

  const handleLoginClick = () => {
    setIsClicked(true);
    setIsLoginVisible(true);
  };

  const handleRegisterClick = () => {
    setIsClicked(false);
    setIsLoginVisible(false);
  };

  return (
    <div className="container">
      <div className="content">
        <Navbar
          handleLoginClick={handleLoginClick}
          handleRegisterClick={handleRegisterClick}
          isLoggedIn={isClicked}
        />
        <NavigationBar isLoggedIn={isClicked} isLoginVisible={isLoginVisible} />
      </div>
    </div>
  );
}

export default App;