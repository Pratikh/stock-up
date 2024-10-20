import LeftWelcomUser from "@/Components/WelcomeUser/LeftWelcomUser";
import RightComponent from "@/Components/WelcomeUser/RightComponent";
import { Flex } from "@chakra-ui/react";

export default function Home() {
  return (
    <Flex
      as="section"
      className={""}
      width="100vw"
      height="100vh"
      flexDirection={["column", "column", "column", "row"]}
    >
      <LeftWelcomUser />
      <RightComponent />
    </Flex>
  );
}
