import React, { useEffect, useState } from 'react'
import { Grid, Container, Loader, Center, Text, Select, Group, Box } from '@mantine/core';
import api from '../api/axios';
import ProductCard from './ProductCard';
import { useSearchParams } from 'react-router-dom';
import ProductsFilter from './ProductsFilter';
import SortByPrice from './SortByPrice';


function Products() {
	const [loading, setLoading] = useState(false);
	const [searchParams] = useSearchParams();
	const [products, setProducts] = useState([]);
	const [cartItems, setCartItems] = useState([]);

	async function fetchProducts(filter) {
		setLoading(true)
		try {
			const params = new URLSearchParams();
			Object.entries({ ...filter, category: searchParams.get("category") }).forEach(([key, value]) => {
				if (value) {
					params.append(key, value)
				}
			})
			const result = await api.get(`/products?${params.toString()}`);
			setProducts(result.data);
		}
		catch (error) {
			console.log(error)
		}
		finally {
			setLoading(false)
		}
	}

	async function addToCart(item) {
		const productItem = cartItems.find(cartItem => cartItem.id === item.id);
		console.log(productItem);
		if (productItem) {
			productItem.quantity += 1;
			setCartItems([...cartItems]);
		}
		else {
			item.quantity = 1;
			setCartItems([item, ...cartItems]);
		}
	}

	const sortProducts = (sortType) => {
		if (sortType === "asc") {
			setProducts(products.toSorted((a, b) => a.price - b.price))
		}
		else if (sortType === "dsc") {
			setProducts(products.toSorted((a, b) => b.price - a.price))
		}
	}

	useEffect(() => {
		fetchProducts();
	}, [searchParams])

	return (
		<div className='products'>
			<div className='title'>
				<h1>shop</h1>
			</div>

			<Container fluid>
				<Grid>
					<Grid.Col span={3}>
						<ProductsFilter fetch={fetchProducts} />
					</Grid.Col>

					<Grid.Col span={9}>
						{loading ?
							<Center>
								<Loader />
							</Center>
							:
							products.length > 0 ?
								<>
									<Box sx={{ marginBottom: 18 }}>
										<Group position='right'>
											<SortByPrice sort={sortProducts} />
										</Group>
									</Box>
									<Grid>
										{products.map((item) =>
											<Grid.Col span={4} key={item.id}>
												<ProductCard productData={item} />
											</Grid.Col>)}
									</Grid>
								</>
								:
								<Text fz="xl" ta="center">No products found 😥</Text>
						}
					</Grid.Col>
				</Grid>
			</Container>
		</div >
	)
}

export default Products