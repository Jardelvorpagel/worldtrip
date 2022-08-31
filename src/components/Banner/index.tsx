import { Box, Container, Flex, Text } from "@chakra-ui/react";

interface BannerProps {
  img: string;
  title: string;
}

export const Banner = ({ img, title }: BannerProps) => {
  return (
    <Box
      backgroundImage={`url(${img})`}
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
      height={["150px", "500px"]}
      position="relative"
      backgroundPosition="center"
      mb={["24px", "80px"]}
    >
      <Box
        position="absolute"
        top="0"
        left="0"
        bottom="0"
        width="100%"
        backgroundColor="#0000007a"
      />
      <Container maxW="container.xl" padding="0">
        <Flex justify={["center", "flex-start"]} align="center" height="150px">
          <Text
            bottom={["initial", "59px"]}
            position={["relative", "absolute"]}
            zIndex="1"
            color="#F5F8FA"
            fontSize={["28px", "48px"]}
            fontWeight="bold"
          >
            {title}
          </Text>
        </Flex>
      </Container>
    </Box>
  );
};
