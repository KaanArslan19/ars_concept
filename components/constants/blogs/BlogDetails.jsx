import { Button, Container, Flex, Heading, Text } from "@chakra-ui/react";
import classes from "./BlogDetails.module.scss";
import Image from "next/image";
import { CgCalendarDates } from "react-icons/cg";
import { BiCategory } from "react-icons/bi";
import { useTranslation } from "next-i18next";
import { urlFor } from "@/client";

const BlogDetails = ({ id, title, imgUrl }) => {
  const { t: translate } = useTranslation("blog");

  function splitStringAtNewlines(inputString) {
    const parts = inputString.split("\n");
    return parts;
  }
  const descText = splitStringAtNewlines(translate(`blog:${id}.description`));
  return (
    <Container centerContent mt={"2rem"} maxW={{ base: "768px", xl: "992px" }}>
      <Heading as="h1" mb={"1rem"}>
        {translate(`blog:${id}.title`)}
      </Heading>
      <Image
        src={urlFor(imgUrl).url()}
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
          {translate(`blog:${id}.date`)}
        </Button>
        <Button
          cursor="default"
          variant="ghost"
          leftIcon={<BiCategory />}
          ml="4rem"
          textTransform="capitalize"
        >
          {translate(`blog:${id}.type`)}
        </Button>
      </Flex>

      {descText.map((item, index) => (
        <Text mt={"1rem"} mb={"1rem"} id="desc-text" key={item + index}>
          {item}
        </Text>
      ))}
    </Container>
  );
};

export default BlogDetails;
