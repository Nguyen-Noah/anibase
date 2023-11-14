import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './components/Login';
import Header from './components/Header';
import Home from './components/Home';import Detail from './components/Detail';
;

function App() {
  return (
    // router allows you to switch between pages without having to refresh
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route exact path='/login' element={<Login />} />
          <Route exact path='/' element={<Home />} />
          <Route path='/detail/:id' element={<Detail />} />
        </Routes>
      </Router>
    </div>
  );
}

// TODO:
//   # fix sign up requiring extra Login button
//   # fix trending
//   # fix clicking on links while sliding
//   # fix spacing with slick-sliders

export default App;
