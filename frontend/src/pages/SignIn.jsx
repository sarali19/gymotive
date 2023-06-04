import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../api/axios";
import { Box, Button, Loader, Paper, PasswordInput, Text, TextInput } from "@mantine/core";
import { useForm, zodResolver } from "@mantine/form";
import { z } from "zod";
import { useLocalStorage } from "@mantine/hooks";

const schema = z.object({
  email: z.string().email().min(1, "Enter your email"),
  password: z.string().min(1, "Enter your password"),
});

const SignIn = ({ isAdmin }) => {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useLocalStorage({ key: "user" });
  const navigate = useNavigate();

  const form = useForm({
    initialValues: {
      email: "",
      password: "",
    },
    validate: zodResolver(schema),
  });

  const submit = async (values) => {
    setLoading(true);
    try {
      const response = await api.post("/users/signin", values, { params: { isAdmin } });
      setUser(response.data);
      navigate("/");
    } catch (error) {
      window.alert(error.response.data);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box maw={350} mx="auto" p={50} bg="white">
      <Text fw={700} fz="xl">
        Sign in
      </Text>

      <form onSubmit={form.onSubmit(submit)}>
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
            {loading ? <Loader size={"sm"} color="gray" /> : "Sign in"}
          </Button>
          <div>
            <Link to="/signup">
              <Text color="dark">
                You don't have an account yet? <b>Sign up</b>!
              </Text>
            </Link>
          </div>
        </Box>
      </form>
    </Box>
  );
};

export default SignIn;
