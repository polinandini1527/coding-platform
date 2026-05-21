import { Link } from "react-router-dom";

function Home() {

  return (

    <div className="home-page">

      {/* HERO SECTION */}

      <div className="hero-section">

        <h1>
          Welcome to SkillBridge AI
        </h1>

        <p>
          Practice coding problems, improve logic building,
          and prepare for technical interviews with an
          interactive coding platform.
        </p>

        <Link to="/problems">

          <button className="hero-button">
            Start Coding
          </button>

        </Link>

      </div>

      {/* PLATFORM STATS */}

      <div className="platform-stats">

        <div className="stat-card">

          <h2>50+</h2>

          <p>Problems</p>

        </div>

        <div className="stat-card">

          <h2>100+</h2>

          <p>Users</p>

        </div>

        <div className="stat-card">

          <h2>500+</h2>

          <p>Code Submissions</p>

        </div>

      </div>

      {/* FEATURES */}

      <div className="features-grid">

        <div className="feature-card">

          <h2>50+ Problems</h2>

          <p>
            Practice Easy, Medium, and Hard coding questions.
          </p>

        </div>

        <div className="feature-card">

          <h2>Code Editor</h2>

          <p>
            Write and test JavaScript code using Monaco Editor.
          </p>

        </div>

        <div className="feature-card">

          <h2>Track Progress</h2>

          <p>
            Monitor solved problems and improve daily.
          </p>

        </div>

      </div>

      {/* FOOTER */}

      <footer className="footer">

        <h2>SkillBridge AI</h2>

        <p>
          Practice coding. Improve problem solving.
          Crack interviews confidently.
        </p>

        <div className="footer-links">

          <a href="/">Home</a><br></br>

          <a href="/problems">Problems</a><br></br>

          <a href="/login">Login</a><br></br>

          <a href="/register">Register</a>

        </div>

        <p className="copyright">
          © 2026 SkillBridge AI. All rights reserved.
        </p>

      </footer>

    </div>

  );

}

export default Home;