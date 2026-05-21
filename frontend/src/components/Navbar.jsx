import { Link, useLocation } from "react-router-dom";

function Navbar() {

  const location = useLocation();

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
              location.pathname === "/" ? "active-nav" : ""
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

    

      </ul>

    </nav>

  );

}

export default Navbar;