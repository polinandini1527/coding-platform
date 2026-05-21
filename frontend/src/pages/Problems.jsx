import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Problems() {

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [solvedProblems, setSolvedProblems] =
  useState([]);

useEffect(() => {

  const storedSolved =
    JSON.parse(
      localStorage.getItem(
        "solvedProblems"
      )
    ) || [];

  setSolvedProblems(storedSolved);

}, []);
  const problems = [

  { id: 1, title: "Two Sum", difficulty: "Easy" },
  { id: 2, title: "Palindrome Checker", difficulty: "Easy" },
  { id: 3, title: "Reverse String", difficulty: "Easy" },
  { id: 4, title: "Valid Anagram", difficulty: "Easy"},
  { id: 5, title: "Remove Duplicates", difficulty: "Easy" },
  { id: 6, title: "Merge Sorted Arrays", difficulty: "Easy"},
  { id: 7, title: "Maximum Number", difficulty: "Easy" },
  { id: 8, title: "Minimum Number", difficulty: "Easy"},
  { id: 9, title: "Factorial", difficulty: "Easy" },
  { id: 10, title: "Prime Number", difficulty: "Easy" },

  { id: 11, title: "Fibonacci Series", difficulty: "Medium" },
  { id: 12, title: "Binary Search", difficulty: "Medium" },
  { id: 13, title: "Valid Parentheses", difficulty: "Medium" },
  { id: 14, title: "Longest Common Prefix", difficulty: "Medium"},
  { id: 15, title: "Rotate Array", difficulty: "Medium"},
  { id: 16, title: "Move Zeroes", difficulty: "Medium" },
  { id: 17, title: "Container With Water", difficulty: "Medium" },
  { id: 18, title: "Search Insert Position", difficulty: "Medium" },
  { id: 19, title: "Product Except Self", difficulty: "Medium" },
  { id: 20, title: "Kadane Algorithm", difficulty: "Medium" },

  { id: 21, title: "Merge Intervals", difficulty: "Medium"},
  { id: 22, title: "Sort Colors", difficulty: "Medium" },
  { id: 23, title: "Subarray Sum", difficulty: "Medium"},
  { id: 24, title: "Next Greater Element", difficulty: "Medium"},
  { id: 25, title: "Group Anagrams", difficulty: "Medium" },
  { id: 26, title: "Spiral Matrix", difficulty: "Medium" },
  { id: 27, title: "Find Peak Element", difficulty: "Medium" },
  { id: 28, title: "Top K Frequent", difficulty: "Medium" },
  { id: 29, title: "Kth Largest Element", difficulty: "Medium" },
  { id: 30, title: "Coin Change", difficulty: "Medium" },

  { id: 31, title: "Linked List Cycle", difficulty: "Hard"},
  { id: 32, title: "LRU Cache", difficulty: "Hard" },
  { id: 33, title: "Word Break", difficulty: "Hard" },
  { id: 34, title: "Trapping Rain Water", difficulty: "Hard" },
  { id: 35, title: "Median of Arrays", difficulty: "Hard"},
  { id: 36, title: "N Queens", difficulty: "Hard" },
  { id: 37, title: "Sudoku Solver", difficulty: "Hard" },
  { id: 38, title: "Merge K Lists", difficulty: "Hard" },
  { id: 39, title: "Serialize Tree", difficulty: "Hard"},
  { id: 40, title: "Word Ladder", difficulty: "Hard" },

  { id: 41, title: "Graph Traversal", difficulty: "Hard"},
  { id: 42, title: "Dijkstra Algorithm", difficulty: "Hard" },
  { id: 43, title: "Minimum Window Substring", difficulty: "Hard" },
  { id: 44, title: "Alien Dictionary", difficulty: "Hard" },
  { id: 45, title: "Clone Graph", difficulty: "Hard"},
  { id: 46, title: "Course Schedule", difficulty: "Hard" },
  { id: 47, title: "Burst Balloons", difficulty: "Hard"},
  { id: 48, title: "Edit Distance", difficulty: "Hard" },
  { id: 49, title: "Regular Expression Matching", difficulty: "Hard" },
  { id: 50, title: "Maximum Path Sum", difficulty: "Hard"}

];

  const filteredProblems = problems.filter((problem) => {

    const matchesSearch =
      problem.title.toLowerCase().includes(search.toLowerCase());

    const matchesFilter =
      filter === "All" || problem.difficulty === filter;

    return matchesSearch && matchesFilter;

  });
const solvedCount =
  problems.filter(
    (p) =>
      solvedProblems.includes(p.id)
  ).length;
  const progress =
  (solvedCount / problems.length) * 100;
const easySolved =
  problems.filter(
    (p) =>
  p.difficulty === "Easy" &&
  solvedProblems.includes(p.id)
  ).length;

const mediumSolved =
  problems.filter(
    (p) =>
      p.difficulty === "Medium" &&
      solvedProblems.includes(p.id)
  ).length;

const hardSolved =
  problems.filter(
    (p) => p.difficulty === "Hard" && solvedProblems.includes(p.id)
  ).length;
  return (

    <div className="problems-container">

      <h1>Coding Problems</h1>
      <div className="stats-box">
        <div className="progress-bar">

  <div
    className="progress-fill"
    style={{ width: `${progress}%` }}
  >

  </div>

</div>

  <h3>
    Solved: {solvedCount} / {problems.length}
  </h3>

  <p>Easy Solved: {easySolved}</p>

  <p>Medium Solved: {mediumSolved}</p>

  <p>Hard Solved: {hardSolved}</p>

</div>

      {/* SEARCH */}

      <input
      className="search-input"
        type="text"
        placeholder="Search Problems..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        
      />

      <br /><br />

      {/* FILTER BUTTONS */}

      <div className="filter-buttons">

        <div className="filter-buttons">
            <div className="filters-section">

  {/* search and filters */}

</div>

  <button
    className={filter === "All" ? "active-filter" : ""}
    onClick={() => setFilter("All")}
  >
    All ({problems.length})
  </button>

  <button
    className={filter === "Easy" ? "active-filter" : ""}
    onClick={() => setFilter("Easy")}
  >
    Easy (
    {problems.filter((p) => p.difficulty === "Easy").length}
    )
  </button>

  <button
    className={filter === "Medium" ? "active-filter" : ""}
    onClick={() => setFilter("Medium")}
  >
    Medium (
    {problems.filter((p) => p.difficulty === "Medium").length}
    )
  </button>

  <button
    className={filter === "Hard" ? "active-filter" : ""}
    onClick={() => setFilter("Hard")}
  >
    Hard (
    {problems.filter((p) => p.difficulty === "Hard").length}
    )
  </button>

</div>
      </div>

      <br />

      {/* PROBLEMS */}

      <div className="problems-grid">

        {
          filteredProblems.map((problem) => (

            <div className="problem-card" key={problem.id}>

              <h2>{problem.title}</h2>

{
  solvedProblems.includes(problem.id) && (

    <p className="solved-text">

      ✓ Solved

    </p>

  )
}

              <span
                className={
                  problem.difficulty === "Easy"
                    ? "easy"
                    : problem.difficulty === "Medium"
                    ? "medium"
                    : "hard"
                }
              >
                {problem.difficulty}
              </span>

              <br /><br />

              <Link to={`/problem/${problem.id}`}>

                <button>
                  Solve Problem
                </button>

              </Link>

            </div>

          ))
        }

      </div>

    </div>

  );

}

export default Problems;