import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import Brand from "../Navigation/Brand";

export default function BrandAndAppIcon() {
  return (
    <Flex backgroundColor={"#43165c"} color="white" p="2">
      <Box>
        <Brand />
        <Text width="250px">
          30th Floor, Sunshine Tower, Senapati Bapat Marg, Dadar (W), Mumbai,
          Maharashtra 400013
        </Text>
      </Box>
    </Flex>
  );
}
