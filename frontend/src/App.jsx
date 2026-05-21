import ProblemDetails from "./pages/ProblemDetails";
import Problems from "./pages/Problems";
import Dashboard from "./pages/Dashboard";
import Navbar from "./components/Navbar";
import ProtectedRoute
from "./components/ProtectedRoute";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>
       <Route
  path="/dashboard"
  element={
    <ProtectedRoute>
      <Dashboard />
    </ProtectedRoute>
  }
/>

        <Route path="/" element={<Home />} />

        <Route
          path="/login"
          element={<Login />}
        />
        <Route path="/signup" element={<Signup />} />

        <Route
  path="/problems"
  element={
    <ProtectedRoute>
      <Problems />
    </ProtectedRoute>
  }
/>
        <Route
  path="/problem/:id"
  element={
    <ProtectedRoute>
      <ProblemDetails />
    </ProtectedRoute>
  }
/>
        

      </Routes>

    </BrowserRouter>
  );
}

export default App;