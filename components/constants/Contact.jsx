import Link from "next/link";
import Map from "../ui/Map/index";
import classes from "./Contact.module.scss";
import { Box, Button, Container, Flex, Heading, Text } from "@chakra-ui/react";
import { SiAirbnb } from "react-icons/si";

const Contact = ({ airbnbId }) => {
  return (
    <Container
      mt={"2rem"}
      maxW={{ base: "992", xl: "1280px", "2xl": "1536px" }}
    >
      <Heading textAlign="center">Bize Ulaşın</Heading>
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
                Cep Telefonu
              </Text>
              <Text mb="0.5rem">+90 (531) 285 57 48</Text>
            </Box>
            <Box>
              <Text
                mb="0.5rem"
                pb="0.2rem"
                borderBottom="2px solid var(--color-primary-light)"
                fontWeight={600}
              >
                Mail Adresi
              </Text>
              <Text mb="1rem">filtur2003@hotmail.com</Text>
            </Box>
          </Box>

          <Link
            href="https://www.airbnb.com.tr/users/show/137500254"
            target="_blank"
          >
            <Button width="100%" mt="3rem" leftIcon={<SiAirbnb />}>
              Air Bnb Rezervasyon
            </Button>
          </Link>
        </Flex>
        <Map />
      </Flex>
      <Box my="2rem">
        <Heading as="h4">Yol Tarifi</Heading>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo tempora
          in delectus assumenda quasi similique magni repellendus fugiat,
          corrupti ipsam excepturi necessitatibus explicabo! Rerum possimus
          quidem consectetur fugit, ex cupiditate.
        </Text>
      </Box>
    </Container>
  );
};

export default Contact;
