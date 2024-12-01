import React from 'react'
import { Link } from 'react-router-dom';
import "./Card.scss";

const Card = ({photo}) => {
  return (
    <Link to={`/product/${photo.id}`} className='link'>
    <div className='card'>
      <div className='image'>
        {photo.isNew && <span>New Season</span>}
        <img src={photo.img} alt='' className='mainimage'/>
        <img src={photo.img2} alt='' className='secondimage'/>
        
       
      </div>
      <h2>{photo.title}</h2>
      <div className='prices'>
            <h3>${photo.oldPrice}</h3>
            <h3>${photo.price}</h3>
        </div>
    </div>
    </Link>
  )
}

export default Card
