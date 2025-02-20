import React from 'react'
import './Card.scss'
import { Link } from 'react-router-dom'

const Card = ({item}) => {
  return (
    <div className='card'>
      <Link to={`${item.id}`} className='imageContainer'>
      <img src={item.image} alt="" />
      </Link>
      <div className="textContainer"></div>

    </div>
  )
}

export default Card
