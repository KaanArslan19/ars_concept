import Link from "next/link";
import Map from "../ui/Map/index";
import { Box, Button, Container, Flex, Heading, Text } from "@chakra-ui/react";
import { SiAirbnb } from "react-icons/si";
import { useTranslation } from "next-i18next";

const Contact = ({ airbnbId }) => {
  const { t: translate } = useTranslation("home");

  return (
    <Container
      mt={"2rem"}
      maxW={{ base: "992px", xl: "1280px", "2xl": "1536px" }}
    >
      <Heading as="h1" textAlign="center">
        {translate("contact:header")}
      </Heading>
      <Flex justify="space-between" direction={{ base: "column", md: "row" }}>
        <Flex
          mr={{ base: "0", md: "8rem" }}
          justifyContent="space-around"
          direction="column"
        >
          <Box>
            <Box>
              <Text
                mb="0.5rem"
                pb="0.2rem"
                borderBottom="2px solid var(--color-primary-light)"
                fontWeight={600}
              >
                {translate("contact:mobile")}
              </Text>
              <Text mb="0.5rem">+90 (532) 510 48 28</Text>
            </Box>
            <Box>
              <Text
                mb="0.5rem"
                pb="0.2rem"
                borderBottom="2px solid var(--color-primary-light)"
                fontWeight={600}
              >
                {translate("contact:mail")}
              </Text>
              <Text mb="1rem">arsconcepthouses@gmail.com</Text>
            </Box>
          </Box>

          <Link
            href="https://www.airbnb.com.tr/users/show/137500254"
            target="_blank"
          >
            <Button width="100%" mt="3rem" leftIcon={<SiAirbnb />}>
              Air Bnb {translate("contact:airbnb")}
            </Button>
          </Link>
        </Flex>
        <Map />
      </Flex>
    </Container>
  );
};

export default Contact;
