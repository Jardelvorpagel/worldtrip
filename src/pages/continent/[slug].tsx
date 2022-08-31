import { Box, Container, Flex, HStack, Text } from "@chakra-ui/react";
import { Banner } from "@components/Banner";
import { InfoItem } from "@components/InfoItem";
import { GetStaticPaths, GetStaticProps } from "next";
import Image from "next/image";

import { continentsData } from "../../data/continents-page";

type Continents = keyof typeof continentsData;

interface ContinentPageProps {
  data: {
    title: string;
    description: string;
    banner: string;
    info: {
      countries: number;
      languages: number;
      cities: number;
    };
    cities: {
      name: string;
      country: string;
      thumb: string;
      flag: string;
    }[];
  };
}

export default function ContinentPage({ data }: ContinentPageProps) {
  const { banner, title, description, info, cities } = data;

  return (
    <>
      <Banner img={banner} title={title} />
      <Container maxW="container.xl">
        <Flex mb={["32px", "80px"]} direction={["column", "row"]}>
          <Text
            flex="1"
            color="#47585B"
            textAlign="justify"
            fontSize={["14px", "24px"]}
            mb={["16px", 0]}
          >
            {description}
          </Text>
          <HStack
            flex="1"
            justifyContent={["flex-start", "flex-end"]}
            columnGap="42px"
          >
            <InfoItem title="países" value={info.countries} />
            <InfoItem title="línguas" value={info.languages} />
            <InfoItem title="cidades +100" value={info.cities} />
          </HStack>
        </Flex>
        <Text
          color="#47585B"
          fontSize={["24px", "36px"]}
          mb={["20px", "40px"]}
          fontWeight="500"
        >
          Cidades +100
        </Text>
        <Flex
          mb={["16px", "35px"]}
          justifyContent={["center", "flex-start"]}
          wrap="wrap"
          columnGap="45px"
          rowGap={["20px", "48px"]}
        >
          {cities.map(({ thumb, name, country, flag }) => (
            <Flex key={name} direction="column">
              <Box
                borderTopRadius="4px"
                overflow="hidden"
                width="256px"
                height="173px"
                background={`url(${thumb})`}
                backgroundSize="cover"
              />
              <HStack
                py="18px"
                px="24px"
                width="100%"
                justifyContent="space-between"
                border="1px solid #FFBA08"
                borderTop="none"
                background="white"
              >
                <Box>
                  <Text
                    fontSize="20px"
                    fontWeight="bold"
                    color="#47585B"
                    mb="12px"
                  >
                    {name}
                  </Text>
                  <Text color="#999999">{country}</Text>
                </Box>
                <Image src={flag} width="30px" height="30px" />
              </HStack>
            </Flex>
          ))}
        </Flex>
      </Container>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = () => ({
  paths: [],
  fallback: "blocking",
});

export const getStaticProps: GetStaticProps = ({ params }) => {
  const { slug } = params as any;
  const data = continentsData[slug as Continents];

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      data,
    },
  };
};
