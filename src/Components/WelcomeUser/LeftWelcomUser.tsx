import { Flex, Text } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import arrowImage from "../../../public/asset/stock_up_arrow.jpg";
export default function LeftWelcomUser() {
  return (
    <Flex
      position="relative"
      flexGrow="1"
      alignItems="center"
      justifyContent="center"
      backgroundColor="#00000099"
      height={["50%", "100%", "100%"]}
    >
      <Image
        alt="Arrow image"
        src={arrowImage}
        priority
        style={{
          position: "absolute",
          top: "0",
          height: "100%",
          objectFit: "cover",
          opacity: "0.5",
        }}
      />
      <Text
        as="h1"
        textAlign="center"
        color="white"
        zIndex="1"
        fontSize={["22px", "36px"]}
      >
        Welcome
        <br />
        to
        <br />
        Stock Up Financial Services
      </Text>
    </Flex>
  );
}
