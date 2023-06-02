import "./App.css";
import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import Header from "./Components/Header";
import Login from "./Components/Login";
import Register from "./Components/Register";
//Komponenty: widok rodzica/widok skarbonki dziecka
import ChildView from "./Components/ChildView";
import ParentView from "./Components/ParentView";
import { QueryClientProvider, QueryClient } from "react-query";
import { BrowserRouter, Routes, Route, NavLink, Link, useNavigate } from "react-router-dom"
import axios from "axios";
import Nawigacja from "./Components/Nawigacja";
const queryClient = new QueryClient();

function NavigationBar(props) {

  const isLoggedIn = props.isLoggedIn;
  const isLoginVisible = props.isLoginVisible;
  if (isLoggedIn) {
    return (
      <div>
        <Header header="LOGOWANIE" />
        {isLoginVisible && <Login />}
      </div>
    );
  }
  return (
    <div>
      <Header header="REJESTRACJA" />
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
  //const navigate = useNavigate();
 
  const auth = localStorage.getItem('token')


  return (
    <BrowserRouter><Nawigacja /></BrowserRouter>
  );
}

export default App;
