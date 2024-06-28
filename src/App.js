import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Menu from './components/pages/Menu';
import AboutUs from './components/pages/AboutUs';
import SignUp from './components/pages/SignUp';


function App() {
  return (
    <>
    <Router basename = '/bobs-business/'>
      <Navbar />
      <Routes>
        <Route path='/' exact element={ <Home/>}></Route>
        <Route path='/menu' exact element={ <Menu/>}></Route>
        <Route path='/about-us' exact element={ <AboutUs/>}></Route>
        <Route path='/sign-up' exact element={ <SignUp/>}></Route>
      </Routes>
    </Router>
    </>
  );
}

export default App;
