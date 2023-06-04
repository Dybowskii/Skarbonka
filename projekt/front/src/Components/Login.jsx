import "../App.css";
import { useRef, useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { setAuthToken } from "./setAuthToken";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();

  const initialValue = {
    username: "",
    email: "",
    password: ""
  }
  const [data, setData] = useState( initialValue );
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const value = e.target.value;
    setData({
      ...data,
      [e.target.name]: value
      
    });
  };

  const submit = async e => {
    e.preventDefault();

    const user = {
        username: "",
        email: data.email,
        password: data.password
      };

    await axios.post('http://127.0.0.1:8000/users/login/', user).then(response => {
      const token = response.data.access;
      localStorage.setItem("token", token);
      setAuthToken(token);
      setMessage("Zalogowales się")
      navigate('/');

    }).catch((error) => 
    {
      console.log(error)
      setMessage("Wystąpił błąd");
    })
      

}


  function dzialaj()
  {
    axios.get("http://127.0.0.1:8000/skarbonka/my/").then(function (response) {
      console.log(response);
    });
  }
  function logout()
  {
    axios.get("http://127.0.0.1:8000/skarbonka/my/").then(function (response) {
      localStorage.removeItem("token");
      setMessage("Wylogowałes się")
      window.location.reload(false);
    });
  }

  return (
    <div>
    <h1>Zaloguj się</h1>
    <div className="message">{message ? <p>{message}</p> : null}</div>
    <form onSubmit={submit} className="registerForm-container">
    {/* <label htmlFor="username">
      username</label>
          <input
            type="text"
            name="username"
            placeholder="username"
            value={data.username}
            onChange={handleChange}
          /> */}
          
      <label htmlFor="email">email</label>
      <input 
          type="email" 
          name="email"
          placeholder="EMAIL" 
          value={data.email}
          onChange={handleChange}
        />

      <label htmlFor="password1">hasło</label>
      <input 
            type="password"
            name="password"
            placeholder="********"
            value={data.password}
            onChange={handleChange} />


      <button type="submit" className="register-button">
        Zaloguj się
      </button>
      <button type="submit" className="passwordReset-button">
        Nie pamiętam hasła
      </button>
      
    </form>
    <div>
      
    </div>
    <button type="submit" onClick={dzialaj}>
        dawaj
      </button>
      
    </div>
    
  );
};
export default Login;
