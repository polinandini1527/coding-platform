import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Editor from "@monaco-editor/react";

function ProblemDetail() {

  const { id } = useParams();

  const [code, setCode] = useState("// Write your code here");

  const [output, setOutput] = useState("");

  const [hint, setHint] = useState("");
  const [submitted, setSubmitted] =
  useState(false);
  useEffect(() => {

  const solvedProblems =
    JSON.parse(
      localStorage.getItem("solvedProblems")
    ) || [];

  if (
    solvedProblems.includes(Number(id))
  ) {

    setSubmitted(true);

  }

}, [id]);

 const problems = [

  {
    id: 1,
    title: "Two Sum",
    difficulty: "Easy",
    description: "Find two numbers whose sum equals the target.",
    example: "Input: [2,7,11,15], target = 9\nOutput: [0,1]",
    explanation: "2 + 7 = 9, so indices are returned.",
    hint: "Use hashmap for fast lookup."
  },

  {
    id: 2,
    title: "Palindrome Checker",
    difficulty: "Easy",
    description: "Check whether string is palindrome.",
    example: "Input: madam\nOutput: true",
    explanation: "String equals its reverse.",
    hint: "Reverse string and compare."
  },

  {
    id: 3,
    title: "Reverse String",
    difficulty: "Easy",
    description: "Reverse given string.",
    example: "Input: hello\nOutput: olleh",
    explanation: "Characters are reversed.",
    hint: "Use split reverse join."
  },

  {
    id: 4,
    title: "Valid Anagram",
    difficulty: "Easy",
    description: "Check whether two strings are anagrams.",
    example: "Input: listen, silent\nOutput: true",
    explanation: "Both contain same characters.",
    hint: "Sort both strings."
  },

  {
    id: 5,
    title: "Remove Duplicates",
    difficulty: "Easy",
    description: "Remove duplicates from array.",
    example: "Input: [1,1,2]\nOutput: [1,2]",
    explanation: "Only unique values remain.",
    hint: "Use Set object."
  },

  {
    id: 6,
    title: "Merge Sorted Arrays",
    difficulty: "Easy",
    description: "Merge two sorted arrays.",
    example: "Input: [1,2],[3,4]\nOutput: [1,2,3,4]",
    explanation: "Arrays are merged in sorted order.",
    hint: "Use merge technique."
  },

  {
    id: 7,
    title: "Maximum Number",
    difficulty: "Easy",
    description: "Find maximum number in array.",
    example: "Input: [1,5,3]\nOutput: 5",
    explanation: "5 is largest element.",
    hint: "Use Math.max."
  },

  {
    id: 8,
    title: "Minimum Number",
    difficulty: "Easy",
    description: "Find minimum number in array.",
    example: "Input: [1,5,3]\nOutput: 1",
    explanation: "1 is smallest element.",
    hint: "Use Math.min."
  },

  {
    id: 9,
    title: "Factorial",
    difficulty: "Easy",
    description: "Find factorial of number.",
    example: "Input: 5\nOutput: 120",
    explanation: "5×4×3×2×1 = 120.",
    hint: "Use loop or recursion."
  },

  {
    id: 10,
    title: "Prime Number",
    difficulty: "Easy",
    description: "Check whether number is prime.",
    example: "Input: 7\nOutput: true",
    explanation: "7 divisible only by 1 and itself.",
    hint: "Check divisibility till sqrt(n)."
  },

  {
    id: 11,
    title: "Fibonacci Series",
    difficulty: "Medium",
    description: "Generate fibonacci series.",
    example: "Input: 5\nOutput: 0 1 1 2 3",
    explanation: "Each term is sum of previous two.",
    hint: "Use iteration."
  },

  {
    id: 12,
    title: "Binary Search",
    difficulty: "Medium",
    description: "Search target using binary search.",
    example: "Input: [1,2,3,4], target=3\nOutput: 2",
    explanation: "Binary search halves search space.",
    hint: "Use low high mid."
  },

  {
    id: 13,
    title: "Valid Parentheses",
    difficulty: "Medium",
    description: "Check balanced parentheses.",
    example: "Input: ()[]{}\nOutput: true",
    explanation: "All brackets properly closed.",
    hint: "Use stack."
  },

  {
    id: 14,
    title: "Longest Common Prefix",
    difficulty: "Medium",
    description: "Find common prefix in strings.",
    example: "Input: flower, flow\nOutput: fl",
    explanation: "fl common in all strings.",
    hint: "Compare characters."
  },

  {
    id: 15,
    title: "Rotate Array",
    difficulty: "Medium",
    description: "Rotate array by k positions.",
    example: "Input: [1,2,3], k=1\nOutput: [3,1,2]",
    explanation: "Array shifted right.",
    hint: "Use reverse method."
  },

  {
    id: 16,
    title: "Move Zeroes",
    difficulty: "Medium",
    description: "Move all zeroes to end.",
    example: "Input: [0,1,0,3]\nOutput: [1,3,0,0]",
    explanation: "Zeroes shifted to end.",
    hint: "Use two pointers."
  },

  {
    id: 17,
    title: "Container With Water",
    difficulty: "Medium",
    description: "Find maximum water container.",
    example: "Input: [1,8,6,2]\nOutput: 8",
    explanation: "Max area formed between heights.",
    hint: "Use two pointers."
  },

  {
    id: 18,
    title: "Search Insert Position",
    difficulty: "Medium",
    description: "Find insert position in sorted array.",
    example: "Input: [1,3,5], target=2\nOutput: 1",
    explanation: "2 inserted at index 1.",
    hint: "Use binary search."
  },

  {
    id: 19,
    title: "Product Except Self",
    difficulty: "Medium",
    description: "Find product except self.",
    example: "Input: [1,2,3,4]\nOutput: [24,12,8,6]",
    explanation: "Each index excludes itself.",
    hint: "Use prefix and suffix."
  },

  {
    id: 20,
    title: "Kadane Algorithm",
    difficulty: "Medium",
    description: "Find maximum subarray sum.",
    example: "Input: [-2,1,-3,4]\nOutput: 4",
    explanation: "Maximum subarray is [4].",
    hint: "Track current and maximum sum."
  },
  {
  id: 21,
  title: "Merge Intervals",
  difficulty: "Medium",
  description: "Merge overlapping intervals.",
  example: "Input: [[1,3],[2,6]]\nOutput: [[1,6]]",
  explanation: "Intervals overlap and are merged.",
  hint: "Sort intervals first."
},

{
  id: 22,
  title: "Sort Colors",
  difficulty: "Medium",
  description: "Sort array containing 0,1,2.",
  example: "Input: [2,0,1]\nOutput: [0,1,2]",
  explanation: "Numbers sorted ascending.",
  hint: "Use Dutch national flag algorithm."
},

{
  id: 23,
  title: "Subarray Sum",
  difficulty: "Medium",
  description: "Find continuous subarray sum.",
  example: "Input: [1,2,3]\nOutput: 6",
  explanation: "Entire array sum is 6.",
  hint: "Use sliding window."
},

{
  id: 24,
  title: "Next Greater Element",
  difficulty: "Medium",
  description: "Find next greater element.",
  example: "Input: [2,1,3]\nOutput: [3,3,-1]",
  explanation: "Next greater values found.",
  hint: "Use stack."
},

{
  id: 25,
  title: "Group Anagrams",
  difficulty: "Medium",
  description: "Group anagram strings.",
  example: "Input: eat tea tan\nOutput: [[eat,tea],[tan]]",
  explanation: "Anagrams grouped together.",
  hint: "Use hashmap with sorted key."
},

{
  id: 26,
  title: "Spiral Matrix",
  difficulty: "Medium",
  description: "Print matrix in spiral order.",
  example: "Input: [[1,2],[3,4]]\nOutput: [1,2,4,3]",
  explanation: "Traverse in spiral pattern.",
  hint: "Track boundaries."
},

{
  id: 27,
  title: "Find Peak Element",
  difficulty: "Medium",
  description: "Find peak element in array.",
  example: "Input: [1,2,3,1]\nOutput: 3",
  explanation: "3 greater than neighbors.",
  hint: "Use binary search."
},

{
  id: 28,
  title: "Top K Frequent",
  difficulty: "Medium",
  description: "Find top k frequent elements.",
  example: "Input: [1,1,2,2,2], k=1\nOutput: [2]",
  explanation: "2 occurs most frequently.",
  hint: "Use hashmap."
},

{
  id: 29,
  title: "Kth Largest Element",
  difficulty: "Medium",
  description: "Find kth largest element.",
  example: "Input: [3,2,1], k=2\nOutput: 2",
  explanation: "2 is second largest.",
  hint: "Use sorting or heap."
},

{
  id: 30,
  title: "Coin Change",
  difficulty: "Medium",
  description: "Find minimum coins required.",
  example: "Input: [1,2,5], amount=11\nOutput: 3",
  explanation: "5+5+1 forms 11.",
  hint: "Use dynamic programming."
},

{
  id: 31,
  title: "Linked List Cycle",
  difficulty: "Hard",
  description: "Detect cycle in linked list.",
  example: "Input: cycle exists\nOutput: true",
  explanation: "Loop detected in list.",
  hint: "Use slow and fast pointers."
},

{
  id: 32,
  title: "LRU Cache",
  difficulty: "Hard",
  description: "Design LRU cache.",
  example: "Input: put/get operations\nOutput: cache result",
  explanation: "Least recently used removed.",
  hint: "Use hashmap and doubly linked list."
},

{
  id: 33,
  title: "Word Break",
  difficulty: "Hard",
  description: "Check if string can be segmented.",
  example: "Input: applepenapple\nOutput: true",
  explanation: "Words exist in dictionary.",
  hint: "Use DP."
},

{
  id: 34,
  title: "Trapping Rain Water",
  difficulty: "Hard",
  description: "Calculate trapped rain water.",
  example: "Input: [4,2,0,3]\nOutput: 4",
  explanation: "Water trapped between bars.",
  hint: "Use left and right max."
},

{
  id: 35,
  title: "Median of Arrays",
  difficulty: "Hard",
  description: "Find median of sorted arrays.",
  example: "Input: [1,3],[2]\nOutput: 2",
  explanation: "Median is middle value.",
  hint: "Use binary search."
},

{
  id: 36,
  title: "N Queens",
  difficulty: "Hard",
  description: "Place queens safely on board.",
  example: "Input: 4\nOutput: valid arrangements",
  explanation: "Queens should not attack.",
  hint: "Use backtracking."
},

{
  id: 37,
  title: "Sudoku Solver",
  difficulty: "Hard",
  description: "Solve sudoku puzzle.",
  example: "Input: sudoku grid\nOutput: solved grid",
  explanation: "Fill valid digits.",
  hint: "Use recursion and backtracking."
},

{
  id: 38,
  title: "Merge K Lists",
  difficulty: "Hard",
  description: "Merge k sorted linked lists.",
  example: "Input: multiple lists\nOutput: merged list",
  explanation: "All lists combined sorted.",
  hint: "Use priority queue."
},

{
  id: 39,
  title: "Serialize Tree",
  difficulty: "Hard",
  description: "Serialize binary tree.",
  example: "Input: tree\nOutput: serialized string",
  explanation: "Tree converted to string.",
  hint: "Use BFS or DFS."
},

{
  id: 40,
  title: "Word Ladder",
  difficulty: "Hard",
  description: "Find shortest transformation sequence.",
  example: "Input: hit to cog\nOutput: 5",
  explanation: "Shortest valid sequence found.",
  hint: "Use BFS."
},

{
  id: 41,
  title: "Graph Traversal",
  difficulty: "Hard",
  description: "Traverse graph nodes.",
  example: "Input: graph\nOutput: traversal order",
  explanation: "All nodes visited.",
  hint: "Use DFS/BFS."
},

{
  id: 42,
  title: "Dijkstra Algorithm",
  difficulty: "Hard",
  description: "Find shortest path.",
  example: "Input: weighted graph\nOutput: shortest distance",
  explanation: "Minimum distance calculated.",
  hint: "Use priority queue."
},

{
  id: 43,
  title: "Minimum Window Substring",
  difficulty: "Hard",
  description: "Find minimum substring containing characters.",
  example: "Input: ADOBECODEBANC\nOutput: BANC",
  explanation: "Smallest valid window found.",
  hint: "Use sliding window."
},

{
  id: 44,
  title: "Alien Dictionary",
  difficulty: "Hard",
  description: "Find alien language order.",
  example: "Input: words list\nOutput: character order",
  explanation: "Order inferred from words.",
  hint: "Use topological sort."
},

{
  id: 45,
  title: "Clone Graph",
  difficulty: "Hard",
  description: "Clone connected graph.",
  example: "Input: graph\nOutput: copied graph",
  explanation: "Deep copy created.",
  hint: "Use DFS with hashmap."
},

{
  id: 46,
  title: "Course Schedule",
  difficulty: "Hard",
  description: "Check if all courses can be completed.",
  example: "Input: prerequisites\nOutput: true",
  explanation: "No cycle exists.",
  hint: "Use topological sort."
},

{
  id: 47,
  title: "Burst Balloons",
  difficulty: "Hard",
  description: "Find maximum coins.",
  example: "Input: [3,1,5]\nOutput: 35",
  explanation: "Best bursting order used.",
  hint: "Use DP."
},

{
  id: 48,
  title: "Edit Distance",
  difficulty: "Hard",
  description: "Find minimum operations to convert strings.",
  example: "Input: horse, ros\nOutput: 3",
  explanation: "3 edits required.",
  hint: "Use dynamic programming."
},

{
  id: 49,
  title: "Regular Expression Matching",
  difficulty: "Hard",
  description: "Implement regex matching.",
  example: "Input: aa, a*\nOutput: true",
  explanation: "Pattern matches string.",
  hint: "Use recursion or DP."
},

{
  id: 50,
  title: "Maximum Path Sum",
  difficulty: "Hard",
  description: "Find maximum path sum in tree.",
  example: "Input: binary tree\nOutput: max sum",
  explanation: "Best path sum calculated.",
  hint: "Use DFS recursion."
}

];
  const problem = problems.find(
    (p) => p.id === Number(id)
  );

  const runCode = () => {

    try {

      const result = eval(code);

      setOutput(String(result));

    } catch (error) {

      setOutput(error.message);

    }
};
    const submitSolution = () => {

  if (
    code.trim() === "" ||
    code === "// Write your code here"
  ) {

    alert("Please write code first!");

    return;

  }

  let solvedProblems =
    JSON.parse(
      localStorage.getItem("solvedProblems")
    ) || [];

  if (
    !solvedProblems.includes(Number(id))
  ) {

    solvedProblems.push(Number(id));

    localStorage.setItem(
      "solvedProblems",
      JSON.stringify(solvedProblems)
    );

  }

  setSubmitted(true);

  alert("Problem Solved Successfully ✅");

};

  if (!problem) {

    return <h1>Problem Not Found</h1>;

  }

  return (

    <div className="problem-detail-container">

      {/* LEFT SIDE */}

      <div className="problem-left">

        <h1>{problem.title}</h1>

        <p className="difficulty-text">
          Difficulty: {problem.difficulty}
        </p>

        <h3>Description</h3>

        <p>{problem.description}</p>

        <h3>Example</h3>

        <div className="example-box">

          <pre>{problem.example}</pre>

        </div>

        <h3>Explanation</h3>

        <div className="explanation-box">

          <p>{problem.explanation}</p>

        </div>

        <button
          onClick={() => setHint(problem.hint)}
          className="hint-button"
        >
          Get AI Hint
        </button>

        {

          hint && (

            <div className="hint-box">

              <h3>AI Hint 🤖</h3>

              <p>{hint}</p>

            </div>

          )

        }

      </div>

      {/* RIGHT SIDE */}

      <div className="problem-right">

        <Editor
          height="400px"
          defaultLanguage="javascript"
          value={code}
          onChange={(value) => setCode(value)}
          theme="vs-dark"
        />

        <button
          onClick={runCode}
          className="run-btn"
        >
          Run Code
        </button>
        <button
  onClick={submitSolution}
  className="submit-btn"
>

  {
    submitted
      ? "✓ Solved"
      : "Submit Solution"
  }

</button>

        <div className="output-box">

          <h3>Output</h3>

          <pre>{output}</pre>

        </div>

      </div>

    </div>

  );
}   
export default ProblemDetail;