import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import './App.css';
import NavBar from './components/navbar/NavBar';
import Home from './pages/Home'
import Table from './pages/Table'

function App() {
  return (
    <BrowserRouter>
      <div className = 'navBar'>
        <NavBar/>
      </div>
      <div className='rota'>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/tabela" element={<Table/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
