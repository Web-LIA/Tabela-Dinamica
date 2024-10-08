import React from 'react';
import NavBar from './components/navBar'
import './App.css';
import Tabela from './components/Table'
import Home from './pages/Home'

function App() {
  return (
    <>
      <div className = 'navBar'>
        <NavBar  style = "navBar"/>
      </div>
      <div className='rota'>
        <Home/>
        {/* <Tabela/> */}
      </div>
    </>
  );
}

export default App;
