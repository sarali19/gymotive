import {
  Box,
  Button,
  Checkbox,
  Container,
  Flex,
  Grid,
  Loader,
  Paper,
  Radio,
  Select,
  Stack,
  Table,
  Text,
  TextInput,
} from "@mantine/core";
import React, { useEffect, useState } from "react";
import api from "../api/axios";
import { useLocalStorage } from "@mantine/hooks";
import { useNavigate } from "react-router-dom";

const thStyle = { background: "#F5F5F5", color: "#F44336", fontWeight: "normal" };

function CMI() {
  const navigate = useNavigate();
  const [_cartItems, _setCartItems, _deleteCartItems] = useLocalStorage({ key: "cartItems", defaultValue: [] });
  const [cartItems, setCartItems] = useState([]);
  const [user, setUser] = useLocalStorage({ key: "user" });
  const [loading, setLoading] = useState(false);
  const [paymentLoading, setPaymentLoading] = useState(false);

  const fetchCart = async () => {
    setLoading(true);
    try {
      const response = await api.get(`/carts/${user?.id}`);
      setCartItems(response.data);
    } finally {
      setLoading(false);
    }
  };

  const emptyClientCart = async () => {
    await api.delete(`/carts/${user.id}`);
    _deleteCartItems();
  };

  const handleCreateOrder = async () => {
    setPaymentLoading(true);
    try {
      const data = cartItems.map((item) => ({
        clientId: item.clientId,
        productId: item.productId,
        quantity: item.quantity,
        total: item.quantity * item.product.price,
        status: "created",
      }));
      await api.post("/orders", data);
      emptyClientCart(); // empties the cart both in database and in localstorage
      window.alert("Order created successfully");
      navigate("/profile");
    } catch (error) {
      window.alert(error.response.data);
    } finally {
      setPaymentLoading(false);
    }
  };

  useEffect(() => {
    if (user) fetchCart();
  }, [user]);

  return (
    <>
      {user && !loading ? (
        <div>
          <Grid>
            <Grid.Col span={6}>
              <Table withBorder withColumnBorders>
                <thead>
                  <tr>
                    <th style={thStyle}>Payment details {new Date().toLocaleDateString()}</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td>
                      <Stack spacing={"md"}>
                        <Text fw={500}>
                          Payment method
                          <img
                            src="https://w7.pngwing.com/pngs/678/81/png-transparent-visa-and-master-cards-mastercard-money-foothills-florist-business-visa-visa-mastercard-text-service-orange.png"
                            height={23}
                            style={{ marginLeft: 18 }}
                          />
                        </Text>

                        <Radio label="Credit card" defaultChecked />
                        <TextInput label="Name on card" placeholder="NAME ON CARD" />
                        <TextInput label="Card number" placeholder="CARD NUMBER" />
                        <Flex>
                          <Select
                            label="Expiration date"
                            data={Array.from(Array(12).keys()).map((month) => ({
                              value: month + 1,
                              label: `${month + 1}`.padStart(2, "0"),
                            }))}
                            value={1}
                          />
                          <Select ml={12} label=" " data={[{ value: 2023, label: 2023 }]} value={2023} />
                        </Flex>
                        <TextInput label="Verification code" placeholder="" w={250} />
                        <Checkbox label="I agree to the terms and conditions" mb={20} />
                      </Stack>
                    </td>
                  </tr>
                </tbody>

                <tfoot>
                  <tr>
                    <th style={{ background: "#F5F5F5" }}>Your payment information with stay confidential</th>
                  </tr>
                </tfoot>
              </Table>
            </Grid.Col>

            <Grid.Col span={6}>
              <Stack>
                <Table withBorder withColumnBorders>
                  <thead>
                    <tr>
                      <th style={thStyle}>ORDER DETAILS</th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr>
                      <td>
                        <b>Products : </b>
                        <ul>
                          {cartItems.map((e) => (
                            <li key={e.id}>{e.product.title}</li>
                          ))}
                        </ul>
                        <br />
                        <b>Amount : </b>
                        {cartItems.reduce((sum, item) => sum + item.quantity * item.product.price, 0)}
                      </td>
                    </tr>
                  </tbody>
                </Table>

                <Table withBorder withColumnBorders>
                  <thead>
                    <tr>
                      <th style={thStyle}>MERCHANT DETAILS</th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr>
                      <td>
                        <b>Merchant name : </b>
                        Gymotive
                      </td>
                    </tr>
                  </tbody>
                </Table>

                <Table withBorder withColumnBorders>
                  <thead>
                    <tr>
                      <th style={thStyle}>CLIENT INFO</th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr>
                      <td>
                        <b>Name : </b> {user.name} <br />
                        <b>Email : </b> {user.email} <br />
                        <b>Address : </b> {user.address}
                        <br />
                      </td>
                    </tr>
                  </tbody>
                </Table>

                <Flex gap={12}>
                  <Button fullWidth color="green" onClick={handleCreateOrder} disabled={paymentLoading}>
                    ACCEPT
                  </Button>
                  <Button fullWidth color="red" disabled={paymentLoading}>
                    CANCEL
                  </Button>
                </Flex>
              </Stack>
            </Grid.Col>
          </Grid>
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
}

export default CMI;
