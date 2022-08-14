import { Box, Container, Flex, HStack, Text, VStack } from "@chakra-ui/react";
import Image from "next/image";

export const Banner = () => {
  return (
    <Box
      backgroundImage="url(../images/bg_banner.png)"
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
    >
      <Container maxW="container.xl">
        <HStack pt="80px" pb="70px" justify="space-between">
          <VStack align="flex-start" width="510px">
            <Text color="white" fontSize="4xl" fontWeight="medium">
              5 Continentes,
              <br />
              infinitas possibilidades.
            </Text>
            <Text color="white" fontSize="xl">
              Chegou a hora de tirar do papel a viagem que você sempre sonhou.
            </Text>
          </VStack>
          <Box position="relative" width="417px" height="0">
            <Box position="absolute" left="0" top="-75px">
              <Image
                width="417.15"
                height="270.74"
                src="/images/banner_airplane.png"
              />
            </Box>
          </Box>
        </HStack>
      </Container>
    </Box>
  );
};
