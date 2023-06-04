import { Image, Text, Button, Container, Grid, Title, NumberInput, Badge } from "@mantine/core";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../api/axios";
import { useLocalStorage } from "@mantine/hooks";

function ProductDetails() {
  let params = useParams();
  let id = params.id;
  const [user] = useLocalStorage({ key: "user" });

  const [productDetails, setProductDetails] = useState({});
  const [count, setCount] = useState(1);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await api.get(`products/${id}`);
      setProductDetails(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const [cartItems, setCartItems] = useLocalStorage({ key: "cartItems", defaultValue: [] });
  const itemExists = cartItems.find((item) => item.id === productDetails.id);

  const addToCart = async () => {
    setCartItems([...cartItems, { ...productDetails, quantity: count }]);
    try {
      await api.post(`/carts/${user.id}/${id}`, { quantity: count });
    } catch (error) {
      window.alert(error.response.data);
    }
  };

  return (
    <Container fluid>
      <Grid>
        <Grid.Col span={9}>
          <Image
            src={
              productDetails.image ||
              "https://www.coats.com/-/media/coats/end-use/footwear/sports-shoes/sneakers-sports-shoes.jpg?rev=-1&width=1240&height=560&op=crop"
            }
            height={500}
            fit="contain"
            radius="md"
            alt="product-image"
            withPlaceholder
          />
        </Grid.Col>
        <Grid.Col span={3}>
          <Text>{productDetails.brand}</Text>
          <Title order={1} mb={20}>
            {productDetails?.title}
          </Title>
          <Text>
            <span
              style={{
                background: "#ff3636",
                color: "white",
                fontWeight: 800,
                padding: 4,
                fontSize: 24,
                borderRadius: 4,
                marginTop: "20px",
              }}
            >
              {productDetails.price} MAD
            </span>
            {productDetails.onSale && (
              <Badge color="red" radius={2} fz={"md"}>
                On Sale
              </Badge>
            )}
          </Text>
          <Text my={50}>{productDetails.description}</Text>

          <NumberInput
            value={count}
            placeholder="Quantity"
            label="Quantity"
            onChange={(value) => setCount(value || 0)}
            mb={10}
          />

          <Button color="dark" fullWidth onClick={addToCart} disabled={itemExists || count === 0}>
            {itemExists ? "Added to cart" : "Add to cart"}
          </Button>
        </Grid.Col>
      </Grid>
    </Container>
  );
}

export default ProductDetails;
