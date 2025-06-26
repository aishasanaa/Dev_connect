import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import GetStarted from "./components/getstarted";
import Login from "./components/login";
import Register from "./components/register";
import Dashboard from "./components/Dashboard";
import Profile from "./components/Profile";
import Job from "./components/Job";

function App() {
  return (
   
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/get-started" element={<GetStarted />} />
          <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
         <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
        <Route path="/jobs" element={<Job />} />
       

      </Routes>
   
  );
}

export default App;