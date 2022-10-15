import { useState } from 'react'
import Home from './Home'
import './App.css'
import logo from './assets/logo.svg'

function App() {
  

  return (
    <div className="app">
        <div className='main-logo-div'>
             <img className='logo-icon' src={logo} />
        </div>
        <Home />
    </div>
  )
}

export default App
