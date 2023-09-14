import { Container, Heading, Text } from "@chakra-ui/react";
import { useTranslation } from "next-i18next";

const About = () => {
  const { t: translate } = useTranslation("about");

  return (
    <Container centerContent mt={"2rem"} maxW={{ base: "768px", xl: "992px" }}>
      <Heading mb={"1rem"}>{translate("about:header")}</Heading>

      <Text mt={"1rem"} mb={"2rem"}>
        {translate("about:description")}
      </Text>
    </Container>
  );
};

export default About;
