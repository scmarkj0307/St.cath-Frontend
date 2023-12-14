import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Messages from "./pages/Message";
import Subjects from "./pages/Subjects";
import Settings from "./pages/Settings";
import "./index.css"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="page">
      <Router>
        <Routes>
          <Route path="/"> 
          <Route index element={<Login/>}/>
          <Route path="/dashboard" element={<Dashboard />}/>
          <Route path="/messages" element={<Messages />}/>
          <Route path="/subjects" element={<Subjects />}/>
          <Route path="/settings" element={<Settings />}/>
        
          </Route>


        </Routes>
      </Router>
    </div>
  );
}

export default App;
