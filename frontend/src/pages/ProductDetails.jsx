import { Card, Image, Text, Group, Badge, createStyles, Center, Button, rem, ActionIcon } from '@mantine/core';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../api/axios';
import { useLocalStorage } from '@mantine/hooks';
import { AiOutlineHeart } from 'react-icons/ai';

const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
  },

  imageSection: {
    width: 500,
    padding: theme.spacing.md,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottom: `${rem(1)} solid ${theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
      }`,
  },

  label: {
    marginBottom: theme.spacing.xs,
    lineHeight: 1,
    fontWeight: 700,
    fontSize: theme.fontSizes.xs,
    letterSpacing: rem(-0.25),
    textTransform: 'uppercase',
  },

  section: {
    padding: theme.spacing.md,
    borderTop: `${rem(1)} solid ${theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
      }`,
  },

  icon: {
    marginRight: rem(5),
    color: theme.colorScheme === 'dark' ? theme.colors.dark[2] : theme.colors.gray[5],
  },
}));


function ProductDetails() {

  let params = useParams()
  let id = params.id;

  const [posts, setPosts] = useState([]);
  const [cart, setCart] = useState(1);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await api.get(`products/${id}`);
      setPosts(response.data);
      console.log(response.data)
    } catch (error) {
      console.log(error);
    }
  };

  const [cartItems, setCartItems] = useLocalStorage({ key: "cartItems", defaultValue: [] });
  const itemExists = cartItems.find(item => item.id === posts.id)

  const addToCart = () => {
    setCartItems([...cartItems, { ...posts, quantity: cart }])
  }

  const handleIncrement = () => {
    setCart(cart + 1);

  }
  const handleDecrement = () => {
    setCart(cart - 1);
  }




  const { classes } = useStyles();


  return (
    <Card withBorder radius="md" className={classes.card}>
      <Card.Section className={classes.imageSection}>
        <Image src={posts.image} />
      </Card.Section>

      <Group position="apart" mt="md">
        <div>
          <ActionIcon variant="default" radius="md" size={36}>
            <AiOutlineHeart size={32} />
          </ActionIcon>
          <Text fw={500}>{posts.title}</Text>
          <Text fz="xs" c="dimmed">
            {posts.description} {posts.brand}
          </Text>
        </div>
        {posts.onSale && <Badge color="pink" variant="light">
          On Sale
        </Badge>}
      </Group>

      <Card.Section className={classes.section} mt="md">
        <Text fz="sm" c="dimmed" className={classes.label}>Quantité</Text>

        {cart > 1 && <Button h={30} onClick={() => handleDecrement()}>-</Button>}
        <span style={{ fontSize: '20px', width: '600px', height: '100px' }} >{cart}</span>
        <Button h={30} onClick={() => handleIncrement()}>+</Button>

      </Card.Section>

      <Card.Section className={classes.section}>
        <Group spacing={30}>
          <div>
            <Text fz="xl" fw={700} sx={{ lineHeight: 1 }}>
              {posts.price} MAD
            </Text>
            <Text fz="sm" c="dimmed" fw={500} sx={{ lineHeight: 1 }} mt={3}>
              per piece
            </Text>
          </div>
          <Button radius="xl" style={{ flex: 1 }} color={itemExists ? "green" : "dark"} fullWidth mt="md" disabled={itemExists ? true : false} onClick={addToCart}>
            {itemExists ? "Added to cart" : "Add to cart"}
          </Button>

        </Group>
      </Card.Section>
    </Card>
  );
}

export default ProductDetails;