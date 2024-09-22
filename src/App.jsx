import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
// import Login from "./components/Login";

function App() {
  return (
    <>
      <div>
        <Router>
          <Routes>
            {/* Home route (currently commented out) */}
            {/* <Route path="/" element={<Home />} /> */}

            {/* Login route */}
            <Route path="/" element={<Home />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
