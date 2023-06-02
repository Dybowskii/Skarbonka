import { useState } from "react";
import axios from 'axios';
import "../App.css";
import { useNavigate } from "react-router-dom";
const Register = () => {

  const initialValue = {
    username: "",
    email: "",
    password1: "",
    password2: "",
    user_type: "p"
  }
  const [message, setMessage] = useState('');
  const [data, setData] = useState( initialValue );
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const value = e.target.value;
    setData({
      ...data,
      [e.target.name]: value
      
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const userData = {
      username: data.username,
      email: data.email,
      password1: data.password1,
      password2: data.password2,
      user_type: data.user_type
    };
    axios.post("http://127.0.0.1:8000/users/register/", userData).then((response) => {
      console.log(response.status, response.data.token);
      navigate('/login')
    }).catch((error) => 
    {
      console.log(error)
      setMessage("Nastąpił błąd");
      
    }
    );;
  }
  return (
    <div>
    <h1>Zarejestruj się</h1>
    <form onSubmit={handleSubmit} className="registerForm-container">
    <label htmlFor="username">
      username</label>
          <input
            type="text"
            name="username"
            placeholder="username"
            value={data.username}
            onChange={handleChange}
          />
          
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
            name="password1"
            placeholder="********"
            value={data.password}
            onChange={handleChange} />

      <label htmlFor="password2">powtórz hasło</label>
      <input 
            type="password"
            name="password2"
            placeholder="********"
            value={data.password2}
            onChange={handleChange} />

      <button type="submit" className="register-button">
        Zarejestruj się
      </button>
    </form>
    <div className="message">{message ? <p>{message}</p> : null}</div>
    </div>
    
  );
};
export default Register;
