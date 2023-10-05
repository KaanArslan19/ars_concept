import { Container, Heading, Text } from "@chakra-ui/react";
import { useTranslation } from "next-i18next";

const About = () => {
  const { t: translate } = useTranslation("about");
  function splitStringAtNewlines(inputString) {
    const parts = inputString.split("\n");
    return parts;
  }
  const aboutText = splitStringAtNewlines(translate(`about:description`));
  return (
    <Container centerContent mt={"2rem"} maxW={{ base: "768px", xl: "992px" }}>
      <Heading mb={"1rem"}>{translate("about:header")}</Heading>

      {aboutText.map((item) => (
        <Text mt={"1rem"} mb={"2rem"}>
          {item} <br />
          <br />
        </Text>
      ))}
    </Container>
  );
};

export default About;
