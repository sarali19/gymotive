import React from "react";
import { Box, Button, Center, Image, Stack, Text, Title } from "@mantine/core";
import { Link } from "react-router-dom";
import { Carousel } from "@mantine/carousel";

const Home = () => {
  return (
    <Box>
      <header>
        <Image src="./src/images/hero-section.webp" alt="banner" />
        <Stack className="hero-text">
          <Text className="hero-title">Impossible is nothing.</Text>
          <Text size="xl">Unlock exclusive experiences, drops and discover the new you.</Text>
          <Link to="/products">
            <Button size="xl" radius="xl" uppercase className="shop-button">
              Shop now
            </Button>
          </Link>
        </Stack>
      </header>
      <Center className="training">
        <div>
          <Title size="h1" align="center">
            WE ARE HERE FOR YOU
          </Title>
          <Text fw={500} fz="md">
            SHOPPING FOR THE RIGHT TRAINING GEAR SHOULDN'T BE AS HARD AS YOUR WORKOUTS.
          </Text>
        </div>
      </Center>

      <Center className="training">
        <div>
          <Title size="h1" align="center">
            WHAT TRAINING MEANS TO US?
          </Title>
          <Text fw={500} fz="md" style={{ padding: 20 }}>
            At our core, GYMOTIVE is a training brand for people who work hard and don’t believe in excuses. Our
            community has grown to millions of athletes from all over the world. As we’ve witnessed this unfold, we have
            gone on a soul searching exercise to try to define training for our community. What we learned is that our
            community is the one defining it for us. Each individual, every day, in their own personal way.
          </Text>

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
                transition: "width 250ms ease",
                "&[data-active]": {
                  width: 40,
                },
              },
            }}
          >
            <Carousel.Slide>
              <Image src="./src/images/coldbath.png" />
            </Carousel.Slide>
            <Carousel.Slide>
              <Image src="./src/images/sledgehammer.png" />
            </Carousel.Slide>
            <Carousel.Slide>
              <Image src="./src/images/sandbag.png" />
            </Carousel.Slide>
            <Carousel.Slide>
              <Image src="./src/images/assaultbike.png" />
            </Carousel.Slide>
            <Carousel.Slide>
              <Image src="./src/images/clean.png" />
            </Carousel.Slide>
            <Carousel.Slide>
              <Image src="./src/images/tiatoomey.png" />
            </Carousel.Slide>
            <Carousel.Slide>
              <Image src="./src/images/golf.png" />
            </Carousel.Slide>
          </Carousel>
        </div>
      </Center>
      <Center>
        <div>
          <Title size="h1" align="center" style={{ padding: 20 }}>
            TRAINING IS EVERYTHING
          </Title>
          <Text fw={500} fz="md">
            At our core, Gymotive is a training brand for people who work hard and don't believe in excuses.
          </Text>
        </div>
      </Center>
    </Box>
  );
};

export default Home;
