import { Box, Container, HStack, Show, Text, VStack } from "@chakra-ui/react";
import Image from "next/image";

export const Hero = () => {
  return (
    <Box
      backgroundImage="url(../images/bg_banner.png)"
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
    >
      <Container maxW="container.xl">
        <HStack
          pt={["28px", "80px"]}
          pb={["28px", "70px"]}
          justify="space-between"
        >
          <VStack align="flex-start" width="510px">
            <Text color="white" fontSize={["20px", "4xl"]} fontWeight="medium">
              5 Continentes,
              <br />
              infinitas possibilidades.
            </Text>
            <Text color="white" fontSize={["14px", "xl"]}>
              Chegou a hora de tirar do papel a viagem que você sempre sonhou.
            </Text>
          </VStack>
          <Show above="sm">
            <Box position="relative" width="417px" height="0">
              <Box position="absolute" left="0" top="-75px">
                <Image
                  width="417.15"
                  height="270.74"
                  src="/images/banner_airplane.png"
                />
              </Box>
            </Box>
          </Show>
        </HStack>
      </Container>
    </Box>
  );
};
