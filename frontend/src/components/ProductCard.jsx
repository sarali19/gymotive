import { ActionIcon, Badge, Button, Card, Group, Image, Text } from '@mantine/core'
import React from 'react'
import { AiOutlineHeart } from 'react-icons/ai'

function ProductCard({ productData }) {
    return (
        <Card shadow="sm" padding="lg" radius="md" withBorder>
            <Card.Section>
                <Image
                    src="./src/images/midnightshoes.jpg"
                    height={160}
                    alt="nike shoes"
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
            <Button variant="light" color="dark" fullWidth mt="md" radius="md">
                Add to cart
            </Button>
            <ActionIcon variant="default" radius="md" size={36}>
                <AiOutlineHeart size={32} />
            </ActionIcon>
        </Card>
    )
}

export default ProductCard