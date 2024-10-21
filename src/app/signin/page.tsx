import {
  Box,
  Button,
  Container,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <Flex
      height="full"
      width="full"
      justifyContent="center"
      alignItems="center"
    >
      <Container
        padding="10"
        boxShadow="rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;"
      >
        <Text as="h4" fontSize="30px" fontWeight="bold" textAlign="center">
          SIGN IN
        </Text>

        <FormControl>
          <Flex flexDirection="column" gap="2" backgroundColor="#f1f4f7">
            <Box>
              <FormLabel>UserID/Email address</FormLabel>
              <Input type="email" />
            </Box>
            <Box>
              <FormLabel>Password</FormLabel>
              <Input type="password" />
            </Box>
            <Button colorScheme="blue" width="full">
              Sign in
            </Button>
          </Flex>
          <Link href="/">
            <Text>Forgot Password</Text>
          </Link>
        </FormControl>
      </Container>
    </Flex>
  );
}
