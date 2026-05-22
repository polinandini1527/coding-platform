import { useNavigate } from "react-router-dom";

function Dashboard() {

  const navigate = useNavigate();

  const user =
    JSON.parse(
      localStorage.getItem("user")
    );

  const solvedProblems =
    JSON.parse(
      localStorage.getItem(
        "solvedProblems"
      )
    ) || [];

  const totalSolved =
    solvedProblems.length;
    const easySolved =
  solvedProblems.filter(
    (id) => id <= 10
  ).length;

const mediumSolved =
  solvedProblems.filter(
    (id) => id >= 11 && id <= 30
  ).length;

const hardSolved =
  solvedProblems.filter(
    (id) => id >= 31
  ).length;

const progress =
  (totalSolved / 50) * 100;

  const handleLogout = () => {

    localStorage.removeItem("loggedIn");
    localStorage.removeItem("token");

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

        <div className="profile-details">

          <p>
            📧 Email:
            {user?.email}
          </p>

          <p>
            🧩 Total Solved:
            {totalSolved}
          </p>

          <p>
            🏆 Rank:
            Beginner Coder
          </p>

          <p>
            🔥 Streak:
            5 Days
          </p>

        </div>
       <div className="stats-card">

  <h2>
    Coding Progress 🚀
  </h2>

  <div className="progress-bar">

    <div
      className="progress-fill"
      style={{
        width: `${progress}%`
      }}
    ></div>

  </div>

  <h1>
    {totalSolved} / 50
  </h1>

  <p>
    Easy Solved: {easySolved}
  </p>

  <p>
    Medium Solved: {mediumSolved}
  </p>

  <p>
    Hard Solved: {hardSolved}
  </p>

</div>
        


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