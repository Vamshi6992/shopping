import React, { useState } from 'react'
import './Product.scss';

const Product = () => {
    const images = [
        "https://images.pexels.com/photos/1972115/pexels-photo-1972115.jpeg?auto=compress&cs=tinyrgb&w=1600",
        "https://images.pexels.com/photos/1163194/pexels-photo-1163194.jpeg?auto=compress&cs=tinyrgb&w=1600",
    ]
    const [img,setImg] = useState(0);
    const [quantity,setQuantity] = useState(1);

  return (
    <div className='product'>
        <div className='left'>
            <div className='images'>
                <img src={images[0]} alt='' onClick={(e)=>setImg(0)}/>
                <img src={images[1]} alt='' onClick={(e)=>setImg(1)}/>
            </div>
            <div className='mainImg'>
                <img src={images[img]} alt=''/>
            </div>
        </div>
        <div className='right'>
        <div className="quantity">
              <button
                onClick={() =>
                  setQuantity((prev) => (prev === 1 ? 1 : prev - 1))
                }
              >
                -
              </button>
              {quantity}
              <button onClick={() => setQuantity((prev) => prev + 1)}>+</button>
            </div>
        </div>
      
    </div>
  )
}

export default Product
