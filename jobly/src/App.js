import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Router from './Router';
import NavBar from './NavBar';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
        <NavBar />
        <Router />
        </BrowserRouter>
    </div>
  );
}

export default App;


