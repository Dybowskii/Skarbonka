import "../App.css";
const Login = () => {
  return (
    <form className="loginForm-container">
      <label htmlFor="login">login</label>
      <input type="text" placeholder="LOGIN" />
      <label htmlFor="password">hasło</label>
      <input type="password" placeholder="HASŁO" />
      <button type="submit" className="login-button">
        Zaloguj się
      </button>
      <button type="submit" className="passwordReset-button">
        Nie pamiętam hasła
      </button>
    </form>
  );
};
export default Login;
