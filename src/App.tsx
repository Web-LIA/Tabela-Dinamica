import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import './App.css';
import NavBar from './components/navbar/navBar';
import Home from './pages/Home'
import Table from './pages/Table'
import Footer from './components/footer/Footer';

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <div className='rota'>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/tabela" element={<Table/>}/>
        </Routes>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
