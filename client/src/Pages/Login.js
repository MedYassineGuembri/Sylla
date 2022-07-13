import { useState } from "react";
import axios from "axios";
import "../styles/Logstyle.css";
import { Icon } from "react-icons-kit";
import { eyeOff } from "react-icons-kit/feather/eyeOff";
import { eye } from "react-icons-kit/feather/eye";

const initialCredentials = {
  email: "",
  password: "",
};

const Login = () => {
  const [data, setData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const [type, setType] = useState("password");
  const [icon, setIcon] = useState(eyeOff);
  const handleToggle = (e) => {
    e.preventDefault();
    if (type === "password") {
      setIcon(eye);
      setType("text");
    } else {
      setIcon(eyeOff);
      setType("password");
    }
  };
  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const url = "http://localhost:5000/api/auth";
      const { data: res } = await axios.post(url, data);
      localStorage.setItem("token", res.data);
      window.location = "/";
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setError(error.response.data.message);
      }
    }
  };
  return (
    <div>
      <div className="login-page">
        <div className="log-container">
          <form className="log-input" onSubmit={handleLogin} id="sign-up-form">
            <div className="titre">
              <label htmlFor="username">Email :</label>
            </div>
            <input
              type="email"
              name="email"
              onChange={handleChange}
              value={data.email}
              required
              className="log-input"
            />
            <br />
            <div className="titre">
              <label htmlFor="password">Mot de passe :</label>
            </div>
            <div className="password">
              <input
                type={type}
                name="password"
                onChange={handleChange}
                value={data.password}
                required
                className="log-input"
              />
              <button
                type="button"
                className="password-button"
                aria-label="Show password"
                onClick={handleToggle}
              >
                <span>
                  <Icon icon={icon} />
                </span>
              </button>
            </div>
            {error && <div className="password-error">{error}</div>}
            <br />
            <div className="bottom-grid">
              <button type="submit" className="login-button">
                Se connecter
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
