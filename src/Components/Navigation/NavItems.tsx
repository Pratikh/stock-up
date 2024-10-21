import { ListItem, UnorderedList } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

const navItems = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About us",
    href: "/",
    childLinks: [
      {
        label: "About us",
        href: "/",
      },
      {
        label: "Our story",
        href: "/",
      },
      {
        label: "Life at StockUp",
        href: "/",
      },
    ],
  },
  {
    label: "Contact Us",
    href: "/",
  },
  {
    label: "FAQ",
    href: "/",
  },
];

export default function NavItems() {
  return (
    <UnorderedList listStyleType={"none"} display={"flex"} gap={2}>
      {navItems.map((item) => {
        return (
          <ListItem key={item.label}>
            <Link href={item.href}>{item.label}</Link>
          </ListItem>
        );
      })}
    </UnorderedList>
  );
}
