import React, { useState } from 'react'
import { brandOptions, categoryOptions, colorOptions } from '../constants'
import { Checkbox, RangeSlider, Select, Text, Box, Button, Center } from '@mantine/core'
import { useForm } from '@mantine/form';

function ProductsFilter({ fetchProducts }) {

    const form = useForm({

        initialValues: {
            // category: "",
            brand: "",
            color: "",
            price: [0, 5000],
            onSale: false
        },
    })


    const handleSubmit = (values) => {
        const params = {
            brand: values.brand,
            color: values.color,
            onSale: values.onSale,
            priceMin: values.price[0],
            priceMax: values.price[1]
        }
        // console.log(values)
        fetchProducts(params)
    }

    return (
        <Box sx={{ padding: "0px 16px" }}>
            <form onSubmit={form.onSubmit(handleSubmit)}>
                {/* <Select
                    label="Category"
                    placeholder="Choose a product category"
                    data={categoryOptions}
                    clearable
                    {...form.getInputProps("category")}
                /> */}

                <Select
                    label="Brand"
                    placeholder="Choose a brand"
                    data={brandOptions}
                    clearable
                    {...form.getInputProps("brand")}
                />

                <Select
                    label="Color"
                    placeholder="Choose a color"
                    data={colorOptions}
                    clearable
                    {...form.getInputProps("color")}
                />

                <Text fw={500}>Price</Text>
                <RangeSlider
                    min={0}
                    max={10000}
                    color='dark'
                    {...form.getInputProps("price")}
                />

                <Checkbox
                    label="On sale"
                    sx={{ marginTop: 12 }}
                    {...form.getInputProps("onSale")}
                />

                <Center>
                    <Button type='submit' color='dark'>
                        Apply
                    </Button>
                </Center>
            </form>
        </Box>
    )
}

export default ProductsFilter