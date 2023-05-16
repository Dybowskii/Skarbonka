import "../App.css";
const Register = () => {
  return (
    <form className="registerForm-container">
      <div className="login-line"></div>
      <label htmlFor="email">email</label>
      <input type="text" placeholder="EMAIL" />
      <label htmlFor="password">hasło</label>
      <input type="password" placeholder="HASŁO" />
      <label htmlFor="password">powtórz hasło</label>
      <input type="password" placeholder="HASŁO" />
      <button type="submit" className="register-button">
        Zarejestruj się
      </button>
    </form>
  );
};
export default Register;
