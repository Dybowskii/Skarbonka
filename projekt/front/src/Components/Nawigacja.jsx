import React, { useEffect, useState }  from "react";
import { useNavigate, NavLink, BrowserRouter, Routes, Route } from "react-router-dom";
import ParentView from "./ParentView";
import ChildView from "./ChildView";
import Login from "./Login";
import axios from "axios";
import Register from "./Register";
import { setAuthToken } from "./setAuthToken";
import ChildDetail from "./ChildDetail";
import MainPage from "./MainPage";
import TestCreate from "./TestCreate";
import Settings from "./Settings";

const Nawigacja=() => {
    const auth = localStorage.getItem('token')
    setAuthToken(auth)
    const navigate = useNavigate();
    const [accountType, setAccountType ] = useState()

    axios.get('http://127.0.0.1:8000/users/me/')
      .then(response => {
          setAccountType(response.data[0].user_type)
      })
      .catch(error => {
        console.log(error)
      });
  
    const logout = () => {
        localStorage.removeItem('token');
        navigate("/login")
    }
    return(
    <div className="container">
      <div className="content">
        <header>
        <ul className="nav-ul">
          <nav>
            <li><NavLink to='/'>Strona główna</NavLink></li>
            {auth ? <><li><NavLink onClick={logout} to='login'>Logout</NavLink></li><li><NavLink to='settings'>Ustawienia</NavLink></li>{accountType=='p'? <li><NavLink to='new' >Nowa skarbonka</NavLink></li>: null}</>
            : 
            <>
            <li><NavLink to='login'>Zaloguj się</NavLink></li>
            <li><NavLink to='register'>Zarejestruj się</NavLink></li>
            </>
            }
          </nav>
          </ul>
        </header>
        <Routes>
        {auth ? <>{accountType=='p'? <Route path="/" element={<ParentView />}/>: <Route path="/" element={<ChildView />}/>}</>: <Route path="/" element={<MainPage />}/>}
        
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="detail/:childID" element={<ChildDetail />} />
          <Route path="new" element={<TestCreate />} />
          <Route path="settings" element={<Settings />} />
        </Routes>
      </div>
    </div>
    )
}
export default Nawigacja;