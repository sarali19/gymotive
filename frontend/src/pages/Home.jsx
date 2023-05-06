import React from 'react'
import { Button, Container, Image, Overlay, Text, Title } from '@mantine/core'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <header>
        <div className="hero-text">
          <div className="hero-image">
            <Image src="./src/images/adidasbanner.jpg" alt="banner" />
          </div>
          <div class='text-on-image'>
            <Title className='hero-title'>
              Impossible is nothing.
            </Title>
            <Text size="xl" mt="xl" className='hero-text'>
              Unlock exclusive experiences, drops and discover the new you.
            </Text>
            <Link to="/products" className="category-button">Shop now</Link>
          </div>
        </div>
      </header>
    </div>
  )
}

export default Home