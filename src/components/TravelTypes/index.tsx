import { Container, Flex } from "@chakra-ui/react";
import { Item } from "./Item";
import { building, cocktail, earth, museum, surf } from "./icons";

export const TravelTypes = () => {
  return (
    <Container mt={["36px", "80px"]} maxW="container.xl" px={["50px", "0"]}>
      <Flex
        columnGap="40px"
        rowGap="24px"
        align="center"
        justify="space-between"
        direction="row"
        wrap="wrap"
      >
        <Item title="vida noturna" icon={cocktail} />
        <Item title="praia" icon={surf} />
        <Item title="moderno" icon={building} />
        <Item title="clássico" icon={museum} />
        <Item title="e mais..." icon={earth} isLastItem />
      </Flex>
    </Container>
  );
};
