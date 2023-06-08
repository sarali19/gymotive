import React, { useEffect, useState } from "react";
import { Box, Button, NumberInput, Select, Text, TextInput, Textarea, Loader, FileInput, Center, Image } from "@mantine/core";
import { useForm, zodResolver } from "@mantine/form";
import { string, z } from "zod";
import api from "../api/axios";
import { brandOptions, categoryOptions, colorOptions } from "../constants";
import { imageToBase64 } from "../util/imageToBase64";
import { useParams } from "react-router-dom";
import { Switch } from '@mantine/core';

const schema = z.object({
  title: z.string().min(2, { message: "Title should have at least 2 letters" }),
  category: z.string().min(1, "You must specify the category"),
  color: z.string().min(1, "You must specify the color"),
  brand: z.string().min(1, "You must specify the brand"),
  price: z.number().refine((value) => value > 0, { message: "Price must be greater than 0" }),
});



function EditProductForm() {
  const { productId } = useParams();
  const [loading, setLoading] = useState(false);

  const form = useForm({
    initialValues: {
      title: "",
      description: "",
      category: "",
      color: "",
      brand: "",
      price: 0,
      onSale: false,
      image: null,
    },
    validate: zodResolver(schema),
  });

  const submitProduct = async (values) => {
    setLoading(true);
    try {
      let image64 = null;
      if (values.image) {
        if (typeof values.image === "object")
          image64 = await imageToBase64(values.image);
        else {
          image64 = values.image
        }
      }
      await api.put(`/products/${[productId]}`, { ...values, image: image64 });
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const fetchProduct = async () => {
    setLoading(true);
    try {
      const result = await api.get(`products/${productId}`);
      form.setValues(result.data);
    } catch (error) {
      window.alert(error.response.data);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  if (loading) {
    return <Loader size="xl" variant="dots" />;
  }

  return (
    <Box maw={350} mx="auto">
      <Text fw={700} fz="xl">
        Create a new product
      </Text>

      <form onSubmit={form.onSubmit(submitProduct)}>
        <TextInput placeholder="Product title" label="Full title" withAsterisk {...form.getInputProps("title")} />

        <Textarea
          placeholder="Product description"
          label="Full description"
          minRows={3}
          autosize
          {...form.getInputProps("description")}
        />

        <Select
          data={categoryOptions}
          placeholder="Product category"
          label="Category"
          withAsterisk
          searchable
          {...form.getInputProps("category")}
        />

        <Select
          data={colorOptions}
          placeholder="Product color"
          label="Color"
          withAsterisk
          {...form.getInputProps("color")}
        />

        <Select
          data={brandOptions}
          placeholder="Product brand"
          label="Brand"
          withAsterisk
          {...form.getInputProps("brand")}
        />

        <NumberInput
          placeholder="Product price"
          label="Price"
          precision={2}
          withAsterisk
          {...form.getInputProps("price")}
        />

        <Switch
          label="On Sale"
          {...form.getInputProps("onSale", { type: "checkbox" })}
        />

        <FileInput
          placeholder="Upload image"
          label="Product image"
          description=".png, .jpeg"
          accept="image/png,image/jpeg"
          {...form.getInputProps("image")}
        />
        {form.values.image && <Image src={form.values.image} />}

        <Center>
          <Button type="submit" color="green" radius="md" size="md" mt={20}>
            Update product
          </Button>
        </Center>
      </form>
    </Box>
  );
}

export default EditProductForm;
