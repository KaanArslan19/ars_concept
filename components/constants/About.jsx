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
      <Heading as="h1" mb={"1rem"}>
        {translate("about:header")}
      </Heading>

      {aboutText.map((item, index) => (
        <Text mt={"1rem"} mb={"2rem"} key={item + index}>
          {item}
        </Text>
      ))}
    </Container>
  );
};

export default About;
