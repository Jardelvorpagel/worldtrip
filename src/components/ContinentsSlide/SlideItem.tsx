import { Box, Flex, Text } from "@chakra-ui/react";
import Image, { StaticImageData } from "next/image";
import { useRouter } from "next/router";

interface SlideItemProps {
  title: string;
  subtitle: string;
  img: string | StaticImageData;
  url: string;
}

export const SlideItem = ({ title, subtitle, img, url }: SlideItemProps) => {
  const { push } = useRouter();

  const handleGoToPage = () => {
    push(url);
  };

  return (
    <Box position="relative" cursor="pointer" onClick={handleGoToPage}>
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
          rowGap={[0, "16px"]}
          height="100%"
        >
          <Text color="#F5F8FA" fontSize={["24px", "48px"]} fontWeight="bold">
            {title}
          </Text>
          <Text
            color="#DADADA"
            fontSize={["14px", "24px"]}
            fontWeight="semibold"
            mt="0px"
          >
            {subtitle}
          </Text>
        </Flex>
      </Box>
    </Box>
  );
};
