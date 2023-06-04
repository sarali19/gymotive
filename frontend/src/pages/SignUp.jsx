import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../api/axios";
import { Box, Button, Loader, PasswordInput, Text, TextInput } from "@mantine/core";
import { useForm, zodResolver } from "@mantine/form";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(1, { message: "Please enter your name" }),
  email: z.string().email(),
  password: z.string().min(1, "Please enter a password"),
});

const SignUp = ({ isAdmin }) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const form = useForm({
    initialValues: {
      name: "",
      email: "",
      password: "",
      address: "",
    },
    validate: zodResolver(schema),
  });

  const submit = async (values) => {
    setLoading(true);
    try {
      const { name, email, password, address } = values;
      await api.post("users/signup", { name, email, password, address }, { params: { isAdmin: !!isAdmin } });
      alert("Account created successfully!");
      navigate("/signin");
    } catch (error) {
      window.alert(error.response.data);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box maw={350} mx="auto" p={50} bg="white">
      <Text fw={700} fz="xl">
        Create account {isAdmin && "(Admin)"}
      </Text>

      <form onSubmit={form.onSubmit(submit)}>
        <TextInput
          placeholder="John Doe"
          label="Full name"
          withAsterisk
          {...form.getInputProps("name")}
          disabled={loading}
        />
        {!isAdmin && (
          <TextInput placeholder="Address" label="Address" {...form.getInputProps("address")} disabled={loading} />
        )}
        <TextInput
          placeholder="example@mail.com"
          label="Email"
          withAsterisk
          {...form.getInputProps("email")}
          disabled={loading}
        />
        <PasswordInput
          placeholder="Password"
          label="Password"
          withAsterisk
          {...form.getInputProps("password")}
          disabled={loading}
        />

        <Box mt={25} sx={{ textAlign: "center" }}>
          <Button type="submit" color="green" radius="md" size="md" mb={10} disabled={loading}>
            {loading ? <Loader size={"sm"} color="gray" /> : "Sign up"}
          </Button>
          <div>
            <Link to="/signin">
              <Text color="dark">
                Already have an account? <b>Sign In</b>!
              </Text>
            </Link>
          </div>
        </Box>
      </form>
    </Box>
  );
};

export default SignUp;
