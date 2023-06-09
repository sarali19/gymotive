import {
  ActionIcon,
  Button,
  Center,
  Divider,
  Grid,
  Group,
  Image,
  Loader,
  Paper,
  Table,
  Text,
  Title,
} from "@mantine/core";
import { useLocalStorage } from "@mantine/hooks";
import React, { useEffect, useState } from "react";
import { AiOutlineClose, AiOutlinePlusSquare, AiOutlineMinusSquare } from "react-icons/ai";
import api from "../api/axios";
import { useNavigate } from "react-router-dom";

function Cart() {
  const [_cartItems, _setCartItems, _deleteCartItems] = useLocalStorage({ key: "cartItems", defaultValue: [] });
  const [user, setUser] = useLocalStorage({ key: "user" });
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function removeFromCart(id) {
    const updatedCartItems = _cartItems.filter((item) => item.id !== id);
    _setCartItems(updatedCartItems);
    await api.delete(`/carts/${user.id}/${id}`);
    fetchCart();
  }

  async function handleQuantityChange(item, step) {
    try {
      const response = await api.put(`/carts/${user.id}/${item.productId}`, { quantity: item.quantity + step });
      setCartItems(
        cartItems.map((item) => (item.id === response.data.id ? { ...item, quantity: response.data.quantity } : item))
      );
    } catch (error) {
      console.log(error);
    }
  }

  const fetchCart = async () => {
    const response = await api.get(`/carts/${user.id}`);
    setCartItems(response.data);
  };

  const calculateCartTotal = () => {
    let sum = 0;
    cartItems.forEach((item) => {
      sum += item.quantity * item.product.price;
    });

    return sum;
  };

  const handleCreateOrder = async () => {
    navigate("/cmi/payment");
  };

  useEffect(() => {
    if (user) {
      fetchCart();
    }
  }, [user]);

  return (
    <>
      {loading ? (
        <Center>
          <Loader />
        </Center>
      ) : (
        <>
          <Title order={1}>Your cart ({cartItems.length} items)</Title>
          <Grid>
            <Grid.Col span={9}>
              {cartItems.length === 0 ? (
                <Text fz="xl" ta="center">
                  Your cart is empty 😓
                </Text>
              ) : (
                <Table horizontalSpacing="xl" verticalSpacing="xl">
                  <thead>
                    <tr>
                      <th colSpan={2}>Product</th>
                      <th>Color</th>
                      <th>Quantity</th>
                      <th>Price</th>
                      <th>Subtotal</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartItems.map((item) => (
                      <tr key={item.id}>
                        <td style={{ padding: 0 }}>
                          <Image src={item.product.image} maw={"250px"} />
                        </td>
                        <td>{item.product.title}</td>
                        <td>{item.product.color}</td>
                        <td>
                          <Group noWrap>
                            <ActionIcon
                              color="dark"
                              variant="transparent"
                              disabled={item.quantity === 1}
                              onClick={() => handleQuantityChange(item, -1)}
                            >
                              <AiOutlineMinusSquare size={"2rem"} />
                            </ActionIcon>
                            {item.quantity}
                            <ActionIcon
                              color="dark"
                              variant="transparent"
                              onClick={() => handleQuantityChange(item, 1)}
                            >
                              <AiOutlinePlusSquare size={"2rem"} />
                            </ActionIcon>
                          </Group>
                        </td>
                        <td>{item.product.price}</td>
                        <td>{item.quantity * item.product.price}</td>

                        <td>
                          <ActionIcon color="red" size="lg" variant="light">
                            <AiOutlineClose onClick={() => removeFromCart(item.productId)} />
                          </ActionIcon>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              )}
            </Grid.Col>
            <Grid.Col span={3}>
              <Paper shadow="xs" p="md">
                <Text fw={800}>TOTAL: {calculateCartTotal()} MAD</Text>
                <Divider />
                <Button onClick={handleCreateOrder}>CHECKOUT</Button>
              </Paper>
            </Grid.Col>
          </Grid>
        </>
      )}
    </>
  );
}

export default Cart;
