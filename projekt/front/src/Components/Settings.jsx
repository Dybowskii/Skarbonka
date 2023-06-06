import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Settings = () => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [message2, setMessage2] = useState('');
  const [index , setIndex] = useState();

  const handlePasswordChange = async () => {
    if (newPassword === confirmPassword) {
      try {
        const data = { new_password1: newPassword, new_password2: confirmPassword };
        const response = await axios.post('http://127.0.0.1:8000/users/change/', data);
        setMessage("Udało zmienić się hasło")
      } catch (error) {
        console.error(error);
        setMessage("Wystąpił błąd. Pamiętaj, że hasło musi mieć conajmniej 8 znaków i nie może być powszechne(np. \"12345678\" lub \"Password\")")
      }
    } else {
        setMessage('Hasła nie są identyczne.');
    }
  };

  const handleNameChange = async () => {
      axios.post('http://127.0.0.1:8000/users/me/username', {
        new_username: name
        }).then(res => {
            setMessage("Nazwa została zmieniona")
        }).catch((err) => 
        {
            setMessage("Wystąpil błąd")
        })
    
  }

  return (
    <div className="settings-view">
      <div className="message">{message2 ? <p>{message2}</p> : null}</div>
    <div className="changePassword-container">
    <h1>Zmiana hasła</h1>
    <input type="password" value={newPassword} placeholder = "Podaj hasło"onChange={(e) => setNewPassword(e.target.value)} />
        <input type="password" value={confirmPassword} placeholder = "Powtórz hasło" onChange={(e) => setConfirmPassword(e.target.value)} />
      <button className = "changePassword-button"onClick={handlePasswordChange}>Zmień hasło</button>
    </div>
      <div className="changeName-container">
      <h1>Zmiana nazwy</h1>
        <input type="text" value={name} placeholder = "Podaj nową nazwę" onChange={(e) => setName(e.target.value)} /><br/>
        <button  className = "changeName-button" onClick={handleNameChange}>Zmień nazwę</button> 
      </div>
    </div>
  );
};

export default Settings;
