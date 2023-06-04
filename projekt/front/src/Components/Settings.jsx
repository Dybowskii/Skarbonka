import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Settings = () => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
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
    <div>
    <h1>Zmiana hasła:</h1>
    <div className="message">{message ? <p>{message}</p> : null}</div>\
    
      <label>
        Nowe hasło:<br/>
        <input type="password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />
      </label>
      <br />
      <label>
        Powtórz hasło:<br/>
        <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
      </label>
      <br />
      <button onClick={handlePasswordChange}>Zmień hasło</button>
      <hr></hr>
      <h1>Zmiana nazwy:</h1>
      <label>
        Nowa nazwa:<br/>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} /><br/>
        <button onClick={handleNameChange}>Zmień nazwę</button>
      </label>
    </div>
  );
};

export default Settings;
