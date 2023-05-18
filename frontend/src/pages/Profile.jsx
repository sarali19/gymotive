import { Avatar, Box, Button, Center, Group, Loader, Paper, SimpleGrid, TextInput, Title } from '@mantine/core'
import React, { useEffect, useState } from 'react'
import { useForm, zodResolver } from '@mantine/form'
import api from '../api/axios';
import { useLocalStorage } from '@mantine/hooks';
import { z } from "zod";


const schema = z.object({
  name: z.string().min(3, "Name must be at least 3 characters"),
  email: z.string().email("Invalid email format"),
  address: z.string(),
})

function Profile() {
  const [loading, setLoading] = useState(false)
  const [user, setUser] = useLocalStorage({ key: "user" })

  const form = useForm({
    initialValues: {
      name: "",
      email: "",
      address: '',
    },

    validate: zodResolver(schema),
  });

  useEffect(() => {
    if (user)
      form.setValues({
        name: user.name,
        email: user.email,
        address: user.address,
      })
  }, [user])

  const updateProfile = async (values) => {
    setLoading(true);
    try {
      const response = await api.put(`/users/${user.id}`, values);
      setUser(response.data)
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (

    <Box maw={1000} mx="auto" my={64} >
      {user && !loading ? <form onSubmit={form.onSubmit(updateProfile)}>
        <Title
          order={2}
          size="h1"
          sx={(theme) => ({ fontFamily: `Greycliff CF, ${theme.fontFamily}` })}
          weight={900}
        // align="center"
        >
          My Profile
        </Title>
        {/* <Center>
          <Avatar alt="no image here" radius="xl" color="green" />
        </Center> */}
        <SimpleGrid cols={2} mt="xl" breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
          <TextInput
            label="Name"
            placeholder="Your name"
            name="name"
            variant="filled"
            {...form.getInputProps('name')}
          />
          <TextInput
            label="Email"
            placeholder="Your email"
            name="email"
            variant="filled"
            {...form.getInputProps('email')}
          />
        </SimpleGrid>
        <TextInput
          label="Address"
          placeholder="Your address"
          name="address"
          variant="filled"
          {...form.getInputProps('address')}
        />

        <Group position="center" mt="xl">
          <Button type="submit" size="md" color='lime'>
            Update my information
          </Button>
        </Group>
      </form>
        :
        <Center>
          <Loader />
        </Center>
      }
    </Box>

  )
}

export default Profile