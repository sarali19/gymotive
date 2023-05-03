import React from 'react'
import { Button, Image } from '@mantine/core'
import { Link } from 'react-router-dom'
// import { Carousel } from '@mantine/carousel';

const Home = () => {
  return (
    <div>
      <Image src="./src/images/adidasbanner.jpg" alt="banner" />
      <Link to="/products" className='link'>Shop now</Link>

    </div>
  )
}

export default Home