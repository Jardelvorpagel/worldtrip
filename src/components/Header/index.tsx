import { Container, Grid, GridItem, IconButton } from "@chakra-ui/react";
import { VscChevronLeft } from "react-icons/vsc";
import { Logo } from "@components/Logo";
import { useRouter } from "next/router";

export const Header = () => {
  const { asPath, back } = useRouter();

  const isNotHome = asPath !== "/";

  return (
    <Container maxW="container.xl">
      <Grid templateColumns="repeat(7, 1fr)" py={6} mx="auto">
        <GridItem mr="auto" my="auto">
          {isNotHome && (
            <IconButton
              variant="ghost"
              _hover={{
                bg: "transparent",
              }}
              aria-label="Come back"
              size="lg"
              icon={<VscChevronLeft size="24" />}
              onClick={back}
            />
          )}
        </GridItem>
        <GridItem colStart={2} colEnd={7}>
          <Logo />
        </GridItem>
      </Grid>
    </Container>
  );
};
