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
    <h1 className="login-header">Witamy <br/> w skarbonce</h1>
    <form onSubmit={handleSubmit} className="registerForm-container">
          <input
            type="text"
            name="username"
            placeholder="Nazwa użytkownika"
            value={data.username}
            onChange={handleChange}
          />
      <input 
          type="email" 
          name="email"
          placeholder="Email" 
          value={data.email}
          onChange={handleChange}
        />
      <input 
            type="password"
            name="password1"
            placeholder="Hasło"
            value={data.password}
            onChange={handleChange} />

      <input 
            type="password"
            name="password2"
            placeholder="Powtórz hasło"
            value={data.password2}
            onChange={handleChange} />
      <button type="submit" className="register2-button">
        Zarejestruj się
      </button>
    </form>
    <div className="message">{message ? <p>{message}</p> : null}</div>
    </div>
    
  );
};
export default Register;
