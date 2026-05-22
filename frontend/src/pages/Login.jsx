import { useState } from "react";

import {
  useNavigate,
  Link
} from "react-router-dom";

function Login() {

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const navigate = useNavigate();

  const handleLogin = () => {

    const storedUser = JSON.parse(localStorage.getItem("user") || "null");
    const emailInput = (email || "").trim().toLowerCase();
    const passwordInput = (password || "").trim();

    if (
      storedUser &&
      (storedUser.email || "").trim().toLowerCase() === emailInput &&
      (storedUser.password || "").trim() === passwordInput
    ) {

      // mark session — set both a flag and a token for compatibility
      localStorage.setItem("loggedIn", "true");
      localStorage.setItem("token", "true");

      alert(
        "Login Successful ✅"
      );

      navigate("/dashboard");

    } else {

      alert(
        "Invalid Credentials ❌"
      );

    }

  };

  return (

    <div className="auth-container">

      <div className="auth-box">

        <h1>Login</h1>

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) =>
            setEmail(
              e.target.value
            )
          }
        />

        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) =>
            setPassword(
              e.target.value
            )
          }
        />

        <button
          type="button"
          onClick={handleLogin}
        >
          Login
        </button>

        <p>
          Don't have account?&nbsp;
          <Link to="/register">Register</Link>
        </p>

      </div>

    </div>

  );

}

export default Login;