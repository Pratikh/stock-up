import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import BrandAndAppIcon from "./BrandAndAppIcon";
import OtherLinks from "./OtherLinks";

export default function Footer() {
  return (
    <Box
      as="footer"
      backgroundColor={"#43165c"}
      color="white"
      p="2"
      display={"flex"}
      justifyContent="center"
    >
      <Flex maxW={"1280px"} width="full">
        <BrandAndAppIcon />
        <OtherLinks />
      </Flex>
    </Box>
  );
}
