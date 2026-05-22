import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function Navbar() {

  const location = useLocation();

  const navigate = useNavigate();

  const [loggedIn, setLoggedIn] = useState(
    Boolean(localStorage.getItem("token"))
  );

  useEffect(() => {

    const onStorage = () => {

      setLoggedIn(
        Boolean(localStorage.getItem("token"))
      );

    };

    window.addEventListener("storage", onStorage);

    return () =>
      window.removeEventListener(
        "storage",
        onStorage
      );

  }, []);

  useEffect(() => {

    setLoggedIn(
      Boolean(localStorage.getItem("token"))
    );

  }, [location]);

  const handleLogout = () => {

    localStorage.removeItem("token");

    localStorage.removeItem("loggedIn");

    setLoggedIn(false);

    navigate("/");

  };

  return (

    <nav className="navbar">

      <div className="logo">

        <h2>SkillBridge AI</h2>

      </div>

      <ul className="nav-links">

        <li>

          <Link
            to="/"
            className={
              location.pathname === "/"
                ? "active-nav"
                : ""
            }
          >
            Home
          </Link>

        </li>

        <li>

          <Link
            to="/problems"
            className={
              location.pathname === "/problems"
                ? "active-nav"
                : ""
            }
          >
            Problems
          </Link>

        </li>

        {

          loggedIn ? (

            <li className="profile-menu">

              <span className="profile-icon">

                👤 Profile

              </span>

              <div className="dropdown-menu">

                <Link to="/dashboard">

                  Dashboard

                </Link>

                <button
                  className="nav-logout"
                  onClick={handleLogout}
                >

                  Logout

                </button>

              </div>

            </li>

          ) : (

            <>

              <li>

                <Link
                  to="/login"
                  className={
                    location.pathname === "/login"
                      ? "active-nav"
                      : ""
                  }
                >
                  Login
                </Link>

              </li>

              <li>

                <Link
                  to="/register"
                  className={
                    location.pathname === "/register"
                      ? "active-nav"
                      : ""
                  }
                >
                  Register
                </Link>

              </li>

            </>

          )

        }

      </ul>

    </nav>

  );

}

export default Navbar;