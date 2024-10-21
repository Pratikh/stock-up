import { Button, Flex } from "@chakra-ui/react";
import React from "react";

export default function AccountAction() {
  return (
    <Flex gap={2}>
      <Button colorScheme="blue">Open a Demat Account</Button>
      <Button variant="outline">Sign in</Button>
    </Flex>
  );
}
