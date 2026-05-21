import { useNavigate } from "react-router-dom";

function Dashboard() {

  const navigate = useNavigate();

  const user =
    JSON.parse(
      localStorage.getItem("user")
    );

  const handleLogout = () => {

    localStorage.removeItem(
      "loggedIn"
    );

    alert("Logged Out Successfully ✅");

    navigate("/login");

  };

  return (

    <div className="dashboard-container">

      <div className="dashboard-box">

        <h1>

          Welcome,
          {user?.name} 👋

        </h1>

        <p>

          You are successfully logged in.

        </p>

        <button
          onClick={() =>
            navigate("/problems")
          }
        >
          Solve Problems
        </button>

        <button
          className="logout-btn"
          onClick={handleLogout}
        >
          Logout
        </button>

      </div>

    </div>

  );

}

export default Dashboard;