import { Flex, Image, Text } from "@chakra-ui/react";
import React from "react";

export default function Brand() {
  return (
    <Flex alignItems="center" gap="2" pr="3">
      <Image
        src="/asset/stockx.svg"
        alt="Brand icon"
        height={50}
        fontSize={"20px"}
        fontWeight={"bold"}
      />
      <Text as="p" fontSize={"20px"} fontWeight={"bold"}>
        StockUp
      </Text>
    </Flex>
  );
}
