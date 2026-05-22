import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Register() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleRegister = async (e) => {

    e.preventDefault();
    if (isSubmitting) return;
    setIsSubmitting(true);

    try {

      const res = await axios.post(
        "http://localhost:5000/api/auth/register",
        {
          name,
          email,
          password
        }
      );

      // save the newly registered user locally so the client-side login flow works
      localStorage.setItem(
        "user",
        JSON.stringify({ name: (name||"").trim(), email: (email||"").trim().toLowerCase(), password: (password||"").trim() })
      );
      // also set a token flag
      localStorage.setItem("token", "true");
      // mark loggedIn for compatibility with Nav and ProtectedRoute
      localStorage.setItem("loggedIn", "true");

      alert(res.data?.message || "Registration successful");
      navigate("/login");

    } catch (error) {

      const msg = error?.response?.data?.message || error.message || "Registration Failed";
      alert(msg);

    } finally {
      setIsSubmitting(false);
    }

  };

  return (

    <div className="container">

      <form onSubmit={handleRegister}>

        <h1>Register</h1>

        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Registering..." : "Register"}
        </button>

      </form>

    </div>

  );
}

export default Register;