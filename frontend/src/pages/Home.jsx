import React from 'react'
import { Button, Center, Image, Stack, Text, Title } from '@mantine/core'
import { Link } from 'react-router-dom'
import { Carousel } from '@mantine/carousel'

const Home = () => {
  return (
    <>
      <header>
        <div >
          <Image src="./src/images/golfer.jpg" alt="banner" />
        </div>
        <Stack className='hero-text'>
          <Text className='hero-title' >
            Impossible is nothing.
          </Text>
          <Text size="xl">
            Unlock exclusive experiences, drops and discover the new you.
          </Text>
          <Link to="/products" >
            <Button size="xl" radius="xl" uppercase className='shop-button'>Shop now</Button>
          </Link>
        </Stack>
      </header>
      <Center className="training">
        <div>
          <Title align="center">TRAINING IS EVERYTHING</Title>
          <Text fw={500} fz="md">At our core, Gymotive is a training brand for people who work hard and don't believe in excuses. </Text>
        </div>
      </Center>
      <Center className="training">
        <div>
          <Title order={1} align="center">WHAT TRAINING MEANS TO US?</Title>

          <Carousel
            loop
            slideSize="33.333333%"
            height={500}
            align="start"
            slideGap="md"
            controlSize={40}
            withIndicators
            styles={{
              indicator: {
                width: 12,
                height: 4,
                transition: 'width 250ms ease',
                '&[data-active]': {
                  width: 40,
                },
              },
            }}
          >
            <Carousel.Slide><Image src="./src/images/coldbath.png" /></Carousel.Slide>
            <Carousel.Slide><Image src="./src/images/sledgehammer.png" /></Carousel.Slide>
            <Carousel.Slide><Image src="./src/images/sandbag.png" /></Carousel.Slide>
            <Carousel.Slide><Image src="./src/images/assaultbike.png" /></Carousel.Slide>
            <Carousel.Slide><Image src="./src/images/clean.png" /></Carousel.Slide>
            <Carousel.Slide><Image src="./src/images/tiatoomey.png" /></Carousel.Slide>
            <Carousel.Slide><Image src="./src/images/golf.png" /></Carousel.Slide>
          </Carousel>
        </div>
      </Center>


    </>
  )
}

export default Home