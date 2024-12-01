import React from 'react'
import Slider from '../../Slider/Slider'
import FeaturedProducts from '../../FeaturedProducts/FeaturedProducts'
import Categories from '../../Categories/Categories'

const Home = () => {
  return (
    <div>
      <Slider/>
      <FeaturedProducts type="featured"/>
      <Categories/>
      <FeaturedProducts type="trending"/>
    </div>
  )
}

export default Home
