import { useState } from "react";
import axios from "axios";
import Navigation from "../components/Navigation";
import "../styles/Navbar.css";
import "../styles/logstyle.css";

const Login = () => {
  const [data, setData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit = async (e) => {
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
          <h1 className="header">Administration Estiam</h1>
          <form className="log-input" onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Email"
              name="email"
              onChange={handleChange}
              value={data.email}
              required
              className="log-input"
            />
            <br />
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleChange}
              value={data.password}
              required
              className="log-input"
            />
            {error && <div className="password-error">{error}</div>}
            <br />
            <div className="bottom-grid">
              <button type="submit" className="login-button">
                Sing In
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
