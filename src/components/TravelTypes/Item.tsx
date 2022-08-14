import { Box, Text, VStack } from "@chakra-ui/react";
import Image from "next/image";

interface ItemProps {
  title: string;
  icon: HTMLImageElement;
}

export const Item = ({ title, icon }: ItemProps) => {
  return (
    <VStack justify="center" rowGap="24px">
      <Image src={icon} />
      <Text color="#47585B" fontWeight="semibold">
        {title}
      </Text>
    </VStack>
  );
};
