import { Flex, Text } from "@chakra-ui/react";

interface InfoItemProps {
  title: string;
  value: number;
}

export const InfoItem = ({ title, value }: InfoItemProps) => {
  return (
    <Flex alignItems={["flex-start", "center"]} direction="column">
      <Text color="#FFBA08" fontSize={["24px", "48px"]} fontWeight="bold">
        {value}
      </Text>
      <Text color="#47585B" fontWeight="bold">
        {title}
      </Text>
    </Flex>
  );
};
