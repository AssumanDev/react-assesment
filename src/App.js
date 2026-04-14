import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Module from "./components/Module";
import Exams from"./components/Exams";
import AboutUs from "./components/AboutUs";
const App=()=>{
  return(
    <>
      <Router>
        <div className="min-h-screen bg-gray-100 md-6 justify items-center">
        <nav className="bg-blue-500 text-white p-4">
          <Link to="/"  className="hover:bg-pink-500 underline">Home</Link> 
          <Link to="/module" className="hover:bg-pink-500 underline">Module</Link> 
          <Link to="/Exams" className="hover:bg-pink-500 underline">Exams</Link> 
          <Link to="/AboutUs" className="hover:bg-pink-500 underline">AboutUs</Link> 
        </nav>
        <div className="p-6">
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/module" element={<Module />} />
        <Route path="/exams" element={<Exams />} />
        <Route path="/aboutus" element={<AboutUs />} />
      </Routes>
      </div>
      </div>
      </Router>
    </>
  );
}

export default App;