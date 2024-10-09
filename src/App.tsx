import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import './App.css';
import NavBar from './components/navBar'
import Table from './pages/Table'
import Home from './pages/Home'
import NewTable from './pages/NewTable'

function App() {
  return (
    <BrowserRouter>
      <div className = 'navBar'>
        <NavBar  style = "navBar"/>
      </div>
      <div className='rota'>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/tabela" element={<Table/>}/>
          <Route path="/tabelanova" element={<NewTable/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
