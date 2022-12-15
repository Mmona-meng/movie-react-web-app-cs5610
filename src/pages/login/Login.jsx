import "./login.scss";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="login">
      <div className="top">
        <div className="wrapper">
  
            <img
              className="logo"
              src='./images/netfly-logo.png'
              alt=""
            />

        </div>
      </div>
      <div className="container">
        <form>
          <h1>Sign In</h1>
          <input type="email" placeholder="Email or phone number" />
          <input type="password" placeholder="Password" />
          <button className="loginButton">Sign In</button>
          <span>
            New to Netfly? <Link to='/register'><b>Sign up now.</b></Link>
          </span>
        </form>
      </div>
    </div>
  );
}