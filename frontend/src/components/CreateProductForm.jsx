import React, { useState } from "react";
import { Box, Button, ColorInput, NumberInput, Select, Text, TextInput, Textarea, Loader } from "@mantine/core";
import { useForm, zodResolver } from "@mantine/form";
import { z } from "zod";
import api from "../api/axios";

const schema = z.object({
  title: z.string().min(2, { message: "Title should have at least 2 letters" }),
  description: z.string(),
  category: z.string().min(1, "You must specify the category"),
  color: z.string(),
  brand: z.string().min(1, "You must specify the brand"),
  price: z.number().refine((value) => value > 0, { message: "Price must be greater than 0" }),
});

function CreateProductForm() {
  const [loading, setLoading] = useState(false);

  const form = useForm({
    initialValues: {
      title: "",
      description: "",
      category: "",
      color: "",
      brand: "",
      price: 0,
    },
    validate: zodResolver(schema),
  });

  const categoryData = [
    { value: "men", label: "Men" },
    { value: "women", label: "Women" },
    { value: "supplements", label: "Supplements" },
    { value: "accessories", label: "Accessories" },
  ];

  const brandData = [
    { value: "adidas", label: "adidas" },
    { value: "nike", label: "nike" },
    { value: "sbd", label: "sbd" },
    { value: "reebok", label: "reebok" },
    { value: "puma", label: "puma" },
    { value: "dymatize", label: "dymatize" },
    { value: "mutant", label: "mutant" },
    { value: "gold standard", label: "gold standard" },
  ];

  const submitProduct = async (values) => {
    setLoading(true);
    try {
      await api.post("/products/", values);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <Loader size="xl" variant="dots" />;
  }

  return (
    <Box maw={350} mx="auto">
      <Text fw={700} fz="xl">
        Create a new product:
      </Text>

      <form onSubmit={form.onSubmit(submitProduct)}>
        <TextInput placeholder="Product title" label="Full title" withAsterisk {...form.getInputProps("title")} />

        <Textarea
          placeholder="Product description"
          label="Full description"
          // withAsterisk
          autosize
          {...form.getInputProps("description")}
        />

        <Select
          data={categoryData}
          placeholder="Product category"
          label="Category"
          withAsterisk
          searchable
          {...form.getInputProps("category")}
        />

        <ColorInput
          disallowInput
          placeholder="Product color"
          label="Color"
          // withAsterisk
          {...form.getInputProps("color")}
        />

        <Select
          data={brandData}
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

        <Button type="submit" color="blue" radius="md" size="md">
          Create product
        </Button>
      </form>
    </Box>
  );
}

export default CreateProductForm;
