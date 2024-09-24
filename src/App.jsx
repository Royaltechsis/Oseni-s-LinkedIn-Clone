import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
// import Login from "./components/Login";

function App() {
  return (
    <>
      <div>
        <Router>
          <Routes>
            {/* Home route (currently commented out) */}
              <Route path="/" element={<Login />} />

             <Route path="/" element={<Home />} /> 

            {/* Login route */}
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
