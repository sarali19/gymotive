import React, { useEffect, useState } from 'react'
import { Grid } from '@mantine/core';
import api from '../api/axios';
import ProductCard from './ProductCard';
import { useLocation, useSearchParams } from 'react-router-dom';


function Products() {
    const [searchParams] = useSearchParams();
    const location = useLocation();
    const [products, setProducts] = useState([]);

    async function fetchProducts() {
        const result = await api.get(`/products?category=${searchParams.get("category")}`);
        console.log(result.data);
        setProducts(result.data);
    }

    useEffect(() => {
        fetchProducts();
    }, [location])

    return (
        <div className='products'>
            <div className='title'>
                <h1>shop</h1>
            </div>
            <div className='products'>
                <Grid gutter={5} gutterXs="md" gutterMd="xl" gutterXl={50}>
                    {
                        products.map((item) => <Grid.Col span={4} key={item.id}><ProductCard productData={item} /></Grid.Col>)
                    }
                </Grid>
            </div>
        </div>
    )
}

export default Products