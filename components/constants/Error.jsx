import { Container } from "@chakra-ui/react";
import Image from "next/image";
import classes from "./Error.module.scss";
const Error = () => {
  return (
    <Container centerContent mt={"2rem"} maxW={{ base: "768px", xl: "992px" }}>
      <Image
        src="/images/404error.webp"
        alt="404-error"
        fill={true}
        style={{ objectFit: "contain" }}
        className={classes.img}
      />
    </Container>
  );
};

export default Error;
