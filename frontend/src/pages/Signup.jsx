import { useState } from "react";
import {
  useNavigate,
  Link
} from "react-router-dom";

function Signup() {

  const [name, setName] =
    useState("");

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const navigate = useNavigate();

  const handleSignup = () => {

    const user = {
      name,
      email,
      password
    };

    localStorage.setItem(
      "user",
      JSON.stringify(user)
    );

    alert(
      "Signup Successful ✅"
    );

    navigate("/login");

  };

  return (

    <div className="auth-container">

      <div className="auth-box">

        <h1>Signup</h1>

        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) =>
            setName(e.target.value)
          }
        />

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
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
          onClick={handleSignup}
        >
          Signup
        </button>

        <p>

          Already have account?

          <Link to="/login">
            Login
          </Link>

        </p>

      </div>

    </div>

  );

}

export default Signup;