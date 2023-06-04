import React, { useEffect, useState } from 'react'
import { Box, Tabs, Table, Group, ActionIcon, Button, Modal, Center, Loader, Text, TextInput } from '@mantine/core'
import { AiFillEdit, AiOutlineClose, AiOutlinePlus, AiOutlineUser } from 'react-icons/ai'
import { BsFillBox2Fill } from 'react-icons/bs'
import api from '../api/axios'
import { useDisclosure } from '@mantine/hooks'

function AdminDashboard() {
  const [orders, setOrders] = useState([]);
  const [clients, setClients] = useState([]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [opened, { open, close }] = useDisclosure(false);
  const [productToDelete, setProductToDelete] = useState(false);
  const [keyword, setKeyword] = useState("");

  const fetchData = async () => {
    setLoading(true);

    try {
      const ordersResponse = await api.get("/orders");
      setOrders(ordersResponse.data);

      const clientsResponse = await api.get("/users");
      setClients(clientsResponse.data);

      const productsResponse = await api.get("/products");
      setProducts(productsResponse.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handleOpen = (productId) => {
    setProductToDelete(productId);
    open();
  };

  const handleDeleteProduct = async (productId) => {
    await api.delete(`/products/${productId}`);
    close();
    fetchData();
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Box maw={"80%"} mx="auto" my={64}>
      <Tabs color="green" variant="pills" radius="xl" defaultValue="orders">
        <Tabs.List>
          <Tabs.Tab value="orders" icon={<BsFillBox2Fill size="0.8rem" />}>
            Orders
          </Tabs.Tab>
          <Tabs.Tab value="clients" icon={<AiOutlineUser size="0.8rem" />}>
            Clients
          </Tabs.Tab>
          <Tabs.Tab value="products" icon={<BsFillBox2Fill size="0.8rem" />}>
            Products
          </Tabs.Tab>
        </Tabs.List>

        {loading ? (
          <Center>
            <Loader />
          </Center>
        ) : (
          <>
            <Tabs.Panel value="orders" pt="xs">
              <TextInput value={keyword} onChange={(e) => setKeyword(e.target.value)} placeholder='Search client by name or email' />
              <Table>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Client</th>
                    <th>ProductId</th>
                    <th>Product</th>
                    <th>Status</th>
                    <th>Quantity</th>
                    <th>Total</th>
                    <th>Created at</th>
                  </tr>
                </thead>
                <tbody>
                  {orders
                    .filter(item => item.client.name.includes(keyword) || item.client.email.includes(keyword))
                    .map((item) =>
                      <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.client.name} ({item.client.email})</td>
                        <td>{item.productId}</td>
                        <td>{item.product.title}</td>
                        <td>{item.status}</td>
                        <td>{item.quantity}</td>
                        <td>{item.total}</td>
                        <td>{item.createdAt}</td>
                      </tr>
                    )}
                </tbody>
              </Table>
            </Tabs.Panel>

            <Tabs.Panel value="clients" pt="xs">
              <Table>
                <thead>
                  <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Address</th>
                  </tr>
                </thead>
                <tbody>
                  {clients.map((item) => (
                    <tr key={item.id}>
                      <td>{item.id}</td>
                      <td>{item.name}</td>
                      <td>{item.email}</td>
                      <td>{item.address}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Tabs.Panel>

            <Tabs.Panel value="products" pt="xs">
              <Button leftIcon={<AiOutlinePlus />} component="a" href="/dashboard/create-product">
                Create Product
              </Button>
              <Table>
                <thead>
                  <tr>
                    <th>Id</th>
                    <th>Title</th>
                    <th>Brand</th>
                    <th>Category</th>
                    <th>Color</th>
                    <th>Price</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((item) => (
                    <tr key={item.id}>
                      <td>{item.id}</td>
                      <td>{item.title}</td>
                      <td>{item.brand}</td>
                      <td>{item.category}</td>
                      <td>{item.color}</td>
                      <td>{item.price} MAD</td>
                      <td>
                        <Group>
                          <ActionIcon
                            color="green"
                            variant="transparent"
                            component="a"
                            href={`dashboard/edit-product/${item.id}`}
                          >
                            <AiFillEdit />
                          </ActionIcon>
                          <ActionIcon color="red" variant="transparent" onClick={() => handleOpen(item.id)}>
                            <AiOutlineClose />
                          </ActionIcon>
                        </Group>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Tabs.Panel>
          </>
        )}
      </Tabs>

      <Modal opened={opened} onClose={close} title="">
        <Text mb={0}>Are you sure you to delete this item</Text>
        <Group position="right">
          <Button color="red" onClick={() => handleDeleteProduct(productToDelete)}>
            Delete
          </Button>
        </Group>
      </Modal>
    </Box>
  );
}

export default AdminDashboard;
