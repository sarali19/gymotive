import React, { useEffect, useState } from 'react'
import { Grid, Container, Loader, Center, Text } from '@mantine/core';
import api from '../api/axios';
import ProductCard from './ProductCard';
import { useSearchParams } from 'react-router-dom';
import ProductsFilter from './ProductsFilter';


function Products() {
	const [loading, setLoading] = useState(false);
	const [searchParams] = useSearchParams();
	const [products, setProducts] = useState([]);

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
						<ProductsFilter fetchProducts={fetchProducts} />
					</Grid.Col>

					<Grid.Col span={9}>
						{loading ?
							<Center>
								<Loader />
							</Center>
							:
							products.length > 0 ?
								<>
									<div>TODO: ORDER PRODUCTS </div>
									<Grid>
										{products.map((item) =>
											<Grid.Col span={4} key={item.id}>
												<ProductCard productData={item} />
											</Grid.Col>)}
									</Grid>
								</>
								:
								<Text fz="xl" ta="center">No product found 😥</Text>
						}
					</Grid.Col>
				</Grid>
			</Container>
		</div >
	)
}

export default Products