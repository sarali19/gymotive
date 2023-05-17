import React from 'react'
import { ActionIcon, Badge, Button, Card, Group, Image, Text } from '@mantine/core'
import { AiOutlineHeart } from 'react-icons/ai'
import { useLocalStorage } from '@mantine/hooks';
import api from '../api/axios';

function ProductCard({ productData }) {
	const [cartItems, setCartItems] = useLocalStorage({ key: "cartItems", defaultValue: [] });
	const [user] = useLocalStorage({ key: "user" });

	const itemExists = cartItems.find(item => item.id === productData.id)

	const addToCart = async () => {
		setCartItems([...cartItems, { ...productData, quantity: 1 }])
		try {
			await api.post(`/carts/${user.id}/${productData.id}`)
		}
		catch (error) {
			console.log(error)
		}
	}

	return (
		<Card shadow="sm" padding="lg" radius="md" withBorder>
			<Card.Section>
				<Image
					src={productData.image}
					height={160}
					alt="nike shoes"
					withPlaceholder
				/>
			</Card.Section>
			<Group position="apart" mt="md" mb="xs">
				<div style={{ minHeight: "50px" }}>
					<Text lineClamp={2} weight={500}>{productData.title}</Text>
					{productData.onSale && <Badge color="pink" variant="light">
						On Sale
					</Badge>}
				</div>

			</Group>
			<Text size="sm" color="dimmed">
				{productData.brand}
			</Text>
			<Text size="md" color="black" fw={700}>
				{productData.price} MAD
			</Text>
			{user &&
				<div>
					<Button color={itemExists ? "green" : "dark"} fullWidth mt="md" radius="md" disabled={itemExists ? true : false} onClick={addToCart}>
						{itemExists ? "Added to cart" : "Add to cart"}
					</Button>
				</div>}


			<ActionIcon variant="default" radius="md" size={36}>
				<AiOutlineHeart size={32} />
			</ActionIcon>
		</Card>
	)
}

export default ProductCard