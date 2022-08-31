import { Box, Show, Text, VStack } from "@chakra-ui/react";
import Image from "next/image";

interface ItemProps {
  title: string;
  icon: HTMLImageElement;
  isLastItem?: boolean;
}

export const Item = ({ title, icon, isLastItem }: ItemProps) => {
  const margin = isLastItem ? "auto" : "0";

  return (
    <VStack justify="center" rowGap="24px" m={[margin, "0"]}>
      <Show above="sm">
        <Image src={icon} />
      </Show>
      <Text
        color="#47585B"
        fontWeight="semibold"
        fontSize={["18px", "24px"]}
        display="flex"
        alignItems="center"
      >
        <Show below="md">
          <Box
            background="#FFBA08"
            width="8px"
            height="8px"
            borderRadius="100%"
            mr="8px"
          />
        </Show>
        {title}
      </Text>
    </VStack>
  );
};
