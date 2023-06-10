import React, { useEffect, useState } from "react";
import { Grid, Container, Loader, Center, Text, Group, Box } from "@mantine/core";
import api from "../api/axios";
import ProductCard from "../components/ProductCard";
import { useSearchParams } from "react-router-dom";
import ProductsFilter from "../components/ProductsFilter";
import SortByPrice from "../components/SortByPrice";

function Products() {
  const [loading, setLoading] = useState(false);
  const [searchParams] = useSearchParams();
  const [products, setProducts] = useState([]);

  async function fetchProducts(filter) {
    setLoading(true);
    try {
      const params = new URLSearchParams();
      Object.entries({ ...filter }).forEach(([key, value]) => {
        if (value) {
          params.append(key, value); //add
        }
      });
      const result = await api.get(`/products?${params.toString()}`);
      setProducts(result.data); // [{}, {}, {} ]
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  const sortProducts = (sortType) => {
    if (sortType === "asc") {
      setProducts(products.toSorted((a, b) => a.price - b.price));
    } else if (sortType === "dsc") {
      setProducts(products.toSorted((a, b) => b.price - a.price));
    }
  };

  useEffect(() => {
    fetchProducts({ category: searchParams.get("category") });
  }, []);

  return (
    <Container fluid>
      <Grid>
        <Grid.Col span={3}>
          <ProductsFilter fetch={fetchProducts} defaultCategory={searchParams.get("category")} />
        </Grid.Col>

        <Grid.Col span={9}>
          {loading ? (
            <Center>
              <Loader />
            </Center>
          ) : products.length > 0 ? (
            <>
              <Box sx={{ marginBottom: 18 }}>
                <Group position="right">
                  <Text color="gray">Showing {products.length} items</Text> <SortByPrice sort={sortProducts} />
                </Group>
              </Box>
              <Grid>
                {products.map((item) => (
                  <Grid.Col span={4} key={item.id}>
                    <ProductCard productData={item} />
                  </Grid.Col>
                ))}
              </Grid>
            </>
          ) : (
            <Text fz="xl" ta="center">
              No products found 😥
            </Text>
          )}
        </Grid.Col>
      </Grid>
    </Container>
  );
}

export default Products;
