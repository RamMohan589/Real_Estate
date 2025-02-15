import React from 'react'
import './layout.scss'
import Navbar from './Components/1_Navbar/Navbar'
import HomePage from './Pages/1_HomePage/HomePage'

const App = () => {
  return (
    <div className='layout'>
      <div className="navbar">
            <Navbar/>
      </div>
      <div className="content">
        <HomePage/>
      </div>
    </div>
  )
}

export default App
