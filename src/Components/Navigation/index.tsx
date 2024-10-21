import React from "react";
import Brand from "./Brand";
import NavItems from "./NavItems";
import { Box, Flex } from "@chakra-ui/react";
import AccountAction from "./AccountAction";

export default function Navigation() {
  return (
    <Box
      as="nav"
      display={"flex"}
      width={"full"}
      alignItems="center"
      justifyContent="center"
      height={"70px"}
    >
      <Flex maxWidth="1280px" width="full" alignItems="center">
        <Flex width="full" alignItems="center">
          <Brand />
          <NavItems />
        </Flex>
        <AccountAction />
      </Flex>
    </Box>
  );
}
