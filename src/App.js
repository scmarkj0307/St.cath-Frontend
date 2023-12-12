import Dashboard from "./pages/Dashboard";
import LoginForm from "./pages/Login";
import "./index.css"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="page">
      <Router>
        <Routes>
          <Route path="/" element={<LoginForm />}/>
          <Route path="/dashboard" element={<Dashboard />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
