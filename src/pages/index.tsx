import { Header } from "@components/Header";
import { Banner } from "@components/Banner";
import type { NextPage } from "next";
import { TravelTypes } from "@components/TravelTypes";
import { Divider, Text } from "@chakra-ui/react";
import { ContinentsSlide } from "@components/ContinentsSlide";

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <Banner />
      <TravelTypes />
      <Divider
        borderBottom="2px"
        mt="80px"
        mb="52px"
        width="90px"
        mx="auto"
        borderColor="#47585B"
      />
      <Text
        fontSize="36px"
        fontWeight="medium"
        mb="52px"
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
