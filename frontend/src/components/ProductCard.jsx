import React from "react";
import { ActionIcon, Badge, Box, Button, Card, Group, Image, Text, Tooltip, Transition } from "@mantine/core";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { BsFillCartPlusFill } from "react-icons/bs";
import { useHover, useLocalStorage } from "@mantine/hooks";

import api from "../api/axios";

import { Link } from "react-router-dom";

function ProductCard({ productData }) {
  const [cartItems, setCartItems] = useLocalStorage({ key: "cartItems", defaultValue: [] });
  const [user] = useLocalStorage({ key: "user" });
  const [wishlistItems, setWishlistItems] = useLocalStorage({ key: "wishlistItems", defaultValue: [] });
  const { hovered, ref } = useHover();

  const itemExists = cartItems.find((item) => item.id === productData.id);
  const itemInWishlist = wishlistItems.find((item) => item.id === productData.id);

  const addToCart = async (e) => {
    e.preventDefault();
    setCartItems([...cartItems, { ...productData, quantity: 1 }]);
    try {
      await api.post(`/carts/${user.id}/${productData.id}`);
    } catch (error) {
      console.log(error);
    }
  };

  const addToWishlist = async (e) => {
    e.preventDefault();
    setWishlistItems([...wishlistItems, { ...productData }]);
  };

  return (
    <Card shadow="lg" padding="lg" radius="md" withBorder>
      <Card.Section sx={{ position: "relative", overflow: "hidden" }} h={200} ref={ref}>
        <Link to={`/products/${productData.id}`} style={{ position: "relative" }}>
          <Image
            src={productData.image}
            height={200 * (1 + (hovered ? 0.3 : 0))}
            alt="product-image"
            withPlaceholder
            fit="contain"
            imageProps={{ style: { transition: "all 0.2s" } }}
          />
          <div style={{ position: "absolute", top: 0, right: 0, margin: "1rem" }}>
            {productData.onSale && (
              <Badge color="red" variant="filled">
                On Sale !
              </Badge>
            )}
          </div>
        </Link>
        {!user?.isAdmin && (
          <Transition mounted={hovered} transition="rotate-left">
            {(styles) => (
              <div style={{ position: "absolute", bottom: 0, right: 0, margin: "0.6rem" }}>
                <ActionIcon
                  size="xl"
                  color={!itemInWishlist ? "gray" : "red"}
                  radius="xl"
                  variant="transparent"
                  onClick={addToWishlist}
                >
                  <AiFillHeart size={24} />
                </ActionIcon>
                <ActionIcon
                  size="xl"
                  color="green"
                  radius="xl"
                  variant="filled"
                  disabled={itemExists ? true : false}
                  onClick={addToCart}
                >
                  <BsFillCartPlusFill size={24} />
                </ActionIcon>
              </div>
            )}
          </Transition>
        )}
      </Card.Section>
      <Box mt="md" mb="xs">
        <Text size="sm" color="dimmed">
          {productData.brand}
        </Text>
        <div style={{ minHeight: "50px" }}>
          <Text lineClamp={2} weight={500}>
            {productData.title}
          </Text>
        </div>
      </Box>

      <Text size="lg" color="gray.6" fw={700}>
        {productData.price} MAD
      </Text>
      {/* {!user?.isAdmin && (
        <div>
          <Button
            color={itemExists ? "green" : "dark"}
            fullWidth
            mt="md"
            radius="md"
            disabled={itemExists ? true : false}
            onClick={addToCart}
          >
            {itemExists ? "Added to cart" : "Add to cart"}
          </Button>
        </div>
      )} */}

      {/* {!user?.isAdmin && (
        <ActionIcon
          sx={{
            "&[data-disabled]": { color: "red" },
          }}
          variant="transparent"
          radius="md"
          size={36}
          color={!itemInWishlist ? "gray" : "red"}
          disabled={itemInWishlist ? true : false}
          onClick={addToWishlist}
        >
          <AiFillHeart size={32} />
        </ActionIcon>
      )} */}
    </Card>
  );
}

export default ProductCard;
