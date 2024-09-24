import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import Home from './components/Home';
import Login from './components/Login';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          {/* Route for Login */}
          <Route path="/" element={<Login />} />

          {/* Route for Home after successful login */}
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
