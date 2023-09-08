import { Button, Container, Flex, Heading, Text } from "@chakra-ui/react";
import classes from "./BlogDetails.module.scss";
import Image from "next/image";
import { CgCalendarDates } from "react-icons/cg";
import { BiCategory } from "react-icons/bi";

const BlogDetails = ({ id, date, title, description, type, imgUrl }) => {
  return (
    <Container centerContent mt={"2rem"} maxW={{ base: "768px", xl: "992px" }}>
      <Heading mb={"1rem"}>{title}</Heading>
      <Image
        src={imgUrl}
        fill={true}
        style={{ objectFit: "contain" }}
        className={classes.img}
        alt={title}
      />

      <Flex
        w="100%"
        justify="space-around"
        mt="0.5rem"
        pb="0.2rem"
        borderBottom="2px solid var(--color-primary-light)"
      >
        <Button
          cursor="default"
          variant="ghost"
          leftIcon={<CgCalendarDates />}
          mr="4rem"
        >
          {date}
        </Button>
        <Button
          cursor="default"
          variant="ghost"
          leftIcon={<BiCategory />}
          ml="4rem"
          textTransform="capitalize"
        >
          {type}
        </Button>
      </Flex>

      <Text mt={"1rem"} mb={"1rem"}>
        {description}
      </Text>
    </Container>
  );
};

export default BlogDetails;
