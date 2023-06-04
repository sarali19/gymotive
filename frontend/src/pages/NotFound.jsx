import { Box, Button, Container, Group, Text, Title, rem } from "@mantine/core";
import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <Container py={rem(80)}>
      <Box sx={{ textAlign: "center" }}>
        <div
          style={{
            textAlign: "center",
            fontWeight: 900,
            fontSize: rem(220),
            lineHeight: 1,
            opacity: 0.25,
          }}
        >
          404
        </div>
        <Title>Page not found!</Title>
        <Text color="dimmed" size="lg" align="center">
          Unfortunately, this is only a 404 page. You may have mistyped the address, or the page has been moved to
          another URL.
        </Text>
        <Group position="center" mt={50}>
          <Button size="md" component="a" href="/" color="green">
            Go back to homepage
          </Button>
        </Group>
      </Box>
    </Container>
  );
}

export default NotFound;
