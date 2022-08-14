import {
  Box,
  Center,
  Container,
  Flex,
  Grid,
  GridItem,
  HStack,
  IconButton,
  Text,
} from "@chakra-ui/react";
import { VscChevronLeft } from "react-icons/vsc";
import { Logo } from "@components/Logo";
import { MAX_WIDTH } from "src/styles/tokens";

export const Header = () => (
  <Container maxW="container.xl">
    <Grid templateColumns="repeat(7, 1fr)" py={6} mx="auto">
      <GridItem mr="auto" my="auto">
        <IconButton
          variant="ghost"
          _hover={{
            bg: "transparent",
          }}
          aria-label="Come back"
          size="lg"
          icon={<VscChevronLeft size="24" />}
        />
      </GridItem>
      <GridItem colStart={2} colEnd={7}>
        <Logo />
      </GridItem>
    </Grid>
  </Container>
);
