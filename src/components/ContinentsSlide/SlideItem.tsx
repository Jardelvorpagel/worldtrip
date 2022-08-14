import { Box, Flex, Text, VStack } from "@chakra-ui/react";
import Image, { StaticImageData } from "next/image";

interface SlideItemProps {
  title: string;
  subtitle: string;
  img: string | StaticImageData;
}

export const SlideItem = ({ title, subtitle, img }: SlideItemProps) => {
  return (
    <Box position="relative">
      <Image src={img} />
      <Box
        position="absolute"
        top="0"
        width="99.4%"
        height="98.7%"
        backgroundColor="#0000006e"
      >
        <Flex
          direction="column"
          justify="center"
          align="center"
          rowGap="16px"
          height="100%"
        >
          <Text color="#F5F8FA" fontSize="48px" fontWeight="bold">
            {title}
          </Text>
          <Text color="#DADADA" fontSize="24px" fontWeight="semibold" mt="0px">
            {subtitle}
          </Text>
        </Flex>
      </Box>
    </Box>
  );
};
