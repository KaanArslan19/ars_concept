import { Box, Button, Container, Flex, Heading, Text } from "@chakra-ui/react";

const About = () => {
  return (
    <Container centerContent mt={"2rem"} maxW={{ base: "768px", xl: "992px" }}>
      <Heading mb={"1rem"}>Hakkımızda</Heading>

      <Text mt={"1rem"} mb={"1rem"}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
        voluptatem qui fuga maiores, culpa aut sed, ipsam voluptatibus earum
        necessitatibus, pariatur enim? Saepe quasi qui, vel ipsa officiis
        aperiam voluptates.{" "}
      </Text>
    </Container>
  );
};

export default About;
