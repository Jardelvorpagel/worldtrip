import { Container, HStack } from "@chakra-ui/react";
import { Item } from "./Item";
import { building, cocktail, earth, museum, surf } from "./icons";

export const TravelTypes = () => {
  return (
    <Container mt="80px" maxW="container.xl">
      <HStack spacing="40px" align="center" justify="space-between">
        <Item title="vida noturna" icon={cocktail} />
        <Item title="praia" icon={surf} />
        <Item title="moderno" icon={building} />
        <Item title="clássico" icon={museum} />
        <Item title="e mais..." icon={earth} />
      </HStack>
    </Container>
  );
};
