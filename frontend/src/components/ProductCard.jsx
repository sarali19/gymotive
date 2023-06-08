import React from "react";
import { ActionIcon, Badge, Button, Card, Group, Image, Text } from "@mantine/core";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { useLocalStorage } from "@mantine/hooks";

import api from "../api/axios";

import { Link } from "react-router-dom";

function ProductCard({ productData }) {
  const [cartItems, setCartItems] = useLocalStorage({ key: "cartItems", defaultValue: [] });
  const [user] = useLocalStorage({ key: "user" });
  const [wishlistItems, setWishlistItems] = useLocalStorage({ key: "wishlistItems", defaultValue: [] });

  const itemExists = cartItems.find((item) => item.id === productData.id);
  const itemInWishlist = wishlistItems.find((item) => item.id === productData.id);

  const addToCart = async () => {
    setCartItems([...cartItems, { ...productData, quantity: 1 }]);
    try {
      await api.post(`/carts/${user.id}/${productData.id}`);
    } catch (error) {
      console.log(error);
    }
  };

  const addToWishlist = async () => {
    setWishlistItems([...wishlistItems, { ...productData }]);
  }

  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Card.Section>
        <Link to={`/products/${productData.id}`}>
          <Image src={productData.image} height={160} alt="product-image" withPlaceholder />
        </Link>
      </Card.Section>
      <Group position="apart" mt="md" mb="xs">
        <div style={{ minHeight: "50px" }}>
          <Text lineClamp={2} weight={500}>
            {productData.title}
          </Text>
          {productData.onSale && (
            <Badge color="pink" variant="light">
              On Sale
            </Badge>
          )}
        </div>
      </Group>
      <Text size="sm" color="dimmed">
        {productData.brand}
      </Text>
      <Text size="md" color="black" fw={700}>
        {productData.price} MAD
      </Text>
      {user && (
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
      )}

      <ActionIcon
        sx={{
          '&[data-disabled]': { color: "red" },
        }}
        variant="transparent"
        radius="md"
        size={36}
        color={!itemInWishlist ? "gray" : "red"}
        disabled={itemInWishlist ? true : false}
        onClick={addToWishlist}>
        <AiFillHeart size={32} />
      </ActionIcon>
    </Card>
  );
}

export default ProductCard;
