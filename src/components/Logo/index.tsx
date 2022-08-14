import { Center } from "@chakra-ui/react";
import Image from "next/image";
import logo from "./logo.svg";

export const Logo = () => (
  <Center>
    <Image width="185px" src={logo} />
  </Center>
);
