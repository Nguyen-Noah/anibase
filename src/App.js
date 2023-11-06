import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './components/Login';
import Header from './components/Header';

function App() {
  return (
    // router allows you to switch between pages without having to refresh
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route exact path='/' element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
