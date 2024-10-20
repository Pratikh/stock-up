import { Button, Container, Flex, Text } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

export default function RightComponent() {
  return (
    <Flex flexGrow="1" alignItems="center" justifyContent="center" padding="10">
      <Container
        display="flex"
        boxShadow="0 4px 6px rgba(0, 0, 0, 0.3);"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
        gap={5}
        height={["300px", "400px"]}
      >
        <Text textAlign="center" fontSize="20px">
          Sign In to continue
          <br />
          or
          <br />
          Sign Up for new registration
        </Text>
        <Flex gap="5">
          <Link href="/signin">
            <Button colorScheme="blue">Sign in</Button>
          </Link>
          <Link href="/signup">
            <Button colorScheme="blue"> Sign up</Button>
          </Link>
        </Flex>
      </Container>
    </Flex>
  );
}
