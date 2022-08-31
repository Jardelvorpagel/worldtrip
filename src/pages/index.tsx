import { Hero } from "@components/Hero";
import type { NextPage } from "next";
import { TravelTypes } from "@components/TravelTypes";
import { Divider, Text } from "@chakra-ui/react";
import { ContinentsSlide } from "@components/ContinentsSlide";

const Home: NextPage = () => {
  return (
    <>
      <Hero />
      <TravelTypes />
      <Divider
        borderBottom="2px"
        mt={["36px", "80px"]}
        mb={["24px", "52px"]}
        width="90px"
        mx="auto"
        borderColor="#47585B"
      />
      <Text
        fontSize={["20px", "36px"]}
        fontWeight="medium"
        mb={["20px", "52px"]}
        align="center"
        color="#47585B"
      >
        Vamos nessa?
        <br />
        Então escolha seu continente
      </Text>
      <ContinentsSlide />
    </>
  );
};

export default Home;
