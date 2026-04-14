import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Module from "./components/Module";
import Exams from"./components/Module";
import AboutUs from "./components/AboutUs";
const App=()=>{
  return(
    <>
      <Router>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/module">Module</Link>
          <Link to="/Exams">Exams</Link>
          <Link to="/AboutUs">AboutUs</Link>
        </nav>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/module" element={<Module />} />
        <Route path="/exams" element={<Exams />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>

      </Router>
    </>
  );
}

export default App;