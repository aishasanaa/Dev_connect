import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import GetStarted from "./components/getstarted";
import Login from "./components/login";
import Register from "./components/register";
import Dashboard from "./components/Dashboard";


function App() {
  return (
   
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/get-started" element={<GetStarted />} />
          <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
         <Route path="/dashboard" element={<Dashboard />} />
        
      </Routes>
   
  );
}

export default App;