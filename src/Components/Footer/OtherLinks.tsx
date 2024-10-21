import { Flex, Text } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

const labelAndLink = [
  {
    head: "Products",
    links: [
      {
        label: "Pro Web",
        link: "/",
      },
      {
        label: "Pro Mobile",
        link: "/",
      },
      {
        label: "Mutual Funds",
        link: "/",
      },
      {
        label: "IPOs",
        link: "/",
      },
    ],
  },
  {
    head: "Company",
    links: [
      {
        label: "Pro Web",
        link: "/",
      },
      {
        label: "Pro Mobile",
        link: "/",
      },
      {
        label: "Mutual Funds",
        link: "/",
      },
      {
        label: "IPOs",
        link: "/",
      },
    ],
  },
  {
    head: "Services",
    links: [
      {
        label: "Pro Web",
        link: "/",
      },
      {
        label: "Pro Mobile",
        link: "/",
      },
      {
        label: "Mutual Funds",
        link: "/",
      },
      {
        label: "IPOs",
        link: "/",
      },
    ],
  },
];

export default function OtherLinks() {
  return (
    <Flex gap={"4"}>
      {labelAndLink.map((item) => (
        <Flex key={item.head} flexDirection="column" gap={"2"}>
          <Text fontSize={"20px"} fontWeight={"bold"}>
            {item.head}
          </Text>
          {item.links.map((linkItem) => (
            <Link key={linkItem.label} href={linkItem.label}>
              {linkItem.label}
            </Link>
          ))}
        </Flex>
      ))}
    </Flex>
  );
}
