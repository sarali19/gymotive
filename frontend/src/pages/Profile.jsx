import {
  Avatar,
  Box,
  Button,
  Center,
  Group,
  Loader,
  Paper,
  SimpleGrid,
  Tabs,
  Text,
  TextInput,
  Title,
} from "@mantine/core";
import React, { useEffect, useState } from "react";
import { useForm, zodResolver } from "@mantine/form";
import api from "../api/axios";
import { useLocalStorage } from "@mantine/hooks";
import { z } from "zod";
import { AiOutlineUser } from "react-icons/ai";
import { BsFillBox2Fill } from "react-icons/bs";

const schema = z.object({
  name: z.string().min(3, "Name must be at least 3 characters"),
  email: z.string().email("Invalid email format"),
  address: z.string(),
});

function Profile() {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useLocalStorage({ key: "user" });
  const [clientOrders, setClientOrders] = useState([]);

  const form = useForm({
    initialValues: {
      name: "",
      email: "",
      address: "",
    },

    validate: zodResolver(schema),
  });

  const fetchClientOrders = async (clientId) => {
    const response = await api.get(`/orders/${clientId}`);
    setClientOrders(response.data);
  };

  useEffect(() => {
    if (user) {
      form.setValues({
        name: user.name,
        email: user.email,
        address: user.address,
      });

      fetchClientOrders(user.id);
    }
  }, [user]);

  const updateProfile = async (values) => {
    setLoading(true);
    try {
      const response = await api.put(`/users/${user.id}`, values);
      setUser(response.data);
      window.alert("Account updated successfully");
    } catch (error) {
      window.alert(error.response.data);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box maw={1000} mx="auto" my={64}>
      <Tabs color="green" variant="pills" radius="xl" defaultValue="info">
        <Tabs.List>
          <Tabs.Tab value="info" icon={<AiOutlineUser size="0.8rem" />}>
            My information
          </Tabs.Tab>
          <Tabs.Tab value="orders" icon={<BsFillBox2Fill size="0.8rem" />}>
            My orders
          </Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="info" pt="xs">
          {user ? (
            <form onSubmit={form.onSubmit(updateProfile)}>
              <Title
                order={2}
                size="h1"
                sx={(theme) => ({ fontFamily: `Greycliff CF, ${theme.fontFamily}` })}
                weight={900}
              >
                My Profile
              </Title>
              <Text fz={"xs"}>Account created : {new Date(user.createdAt).toDateString()}</Text>
              <SimpleGrid cols={2} mt="xl" breakpoints={[{ maxWidth: "sm", cols: 1 }]}>
                <TextInput
                  label="Name"
                  placeholder="Your name"
                  name="name"
                  {...form.getInputProps("name")}
                  disabled={loading}
                />
                <TextInput
                  label="Email"
                  placeholder="Your email"
                  name="email"
                  {...form.getInputProps("email")}
                  disabled
                />
              </SimpleGrid>
              <TextInput
                label="Address"
                placeholder="Your address"
                name="address"
                {...form.getInputProps("address")}
                disabled={loading}
              />

              <Group position="center" mt="xl">
                <Button type="submit" size="md" color="green" disabled={loading}>
                  {loading ? <Loader size={"sm"} color="gray" /> : "Save"}
                </Button>
              </Group>
            </form>
          ) : (
            <Center>
              <Loader />
            </Center>
          )}
        </Tabs.Panel>

        <Tabs.Panel value="orders" pt="xs">
          {/* TODO */}
          {clientOrders.map((item) => item.product.title)}
        </Tabs.Panel>
      </Tabs>
    </Box>
  );
}

export default Profile;
