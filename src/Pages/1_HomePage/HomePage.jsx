import React from 'react'
import './HomePage.scss'
import SearchBar from '../../Components/2_SearchBar/SearchBar'

const HomePage = () => {
  return (
    <div className='homePage' >

      <div className="homePage_left">
        <div className="homePage_left_wrapper">
           <h1 className='homePage_left_wrapper_title' >Find Real Estate & Get Your Dream Place</h1>
           <p>
           Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
           </p>
           <SearchBar/>
           <div className="boxes">
            <div className="box">
              <h1>16+</h1>
              <h2>Years Of Experience</h2>
            </div>
            <div className="box">
              <h1>200</h1>
              <h2>Award Gained</h2>
            </div>
            <div className="box">
              <h1>1200+</h1>
              <h2>Property Ready</h2>
            </div>
           </div>
        </div>
        
      </div>

      <div className="homePage_right">
        <img src="/bg.png" alt="" />
      </div>
      
    </div>
  )
}

export default HomePage

