import Home from "./Pages/Home";
import Project from "./Pages/Projects";
import Contact from "./Pages/Contact";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Projects" element={<Project />} />
            <Route path="/Contact" element={<Contact />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
