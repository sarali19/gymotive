import React from 'react'
import { ActionIcon, Badge, Button, Card, Group, Image, Text } from '@mantine/core'
import { AiOutlineHeart } from 'react-icons/ai'
import { useLocalStorage } from '@mantine/hooks';

function ProductCard({ productData }) {
	const [cartItems, setCartItems] = useLocalStorage({ key: "cartItems", defaultValue: [] });

	const itemExists = cartItems.find(item => item.id === productData.id)

	const addToCart = () => {
		setCartItems([...cartItems, { ...productData, quantity: 1 }])
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
				<Text weight={500}>{productData.title}</Text>
				{productData.onSale && <Badge color="pink" variant="light">
					On Sale
				</Badge>}
			</Group>
			<Text size="sm" color="dimmed">
				{productData.brand}
			</Text>
			<Text size="md" color="black" fw={700}>
				{productData.price} MAD
			</Text>
			<div>
				<Button color={itemExists ? "green" : "dark"} fullWidth mt="md" radius="md" disabled={itemExists ? true : false} onClick={addToCart}>
					{itemExists ? "Added to cart" : "Add to cart"}
				</Button>
			</div>


			<ActionIcon variant="default" radius="md" size={36}>
				<AiOutlineHeart size={32} />
			</ActionIcon>
		</Card>
	)
}

export default ProductCard