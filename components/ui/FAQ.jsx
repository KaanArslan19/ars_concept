import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
} from "@chakra-ui/react";
import classes from "./FAQ.module.scss";

const FAQ = () => {
  return (
    <Accordion defaultIndex={[0]} allowMultiple mb={"4rem"} mt={"2rem"}>
      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box
              as="span"
              flex="1"
              textAlign="left"
              fontSize={{ base: "1rem", md: "1.2rem", "2xl": "1.5rem" }}
            >
              Section 1 title
            </Box>
            <AccordionIcon
              fontSize={{ base: "1rem", md: "1.5rem", "2xl": "2rem" }}
              color="var(--color-secondary-logo)"
            />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </AccordionPanel>
      </AccordionItem>

      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box
              as="span"
              flex="1"
              textAlign="left"
              fontSize={{ base: "1rem", md: "1.2rem", "2xl": "1.5rem" }}
            >
              Section 2 title
            </Box>
            <AccordionIcon
              fontSize={{ base: "1rem", md: "1.5rem", "2xl": "2rem" }}
              color="var(--color-secondary-logo)"
            />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};

export default FAQ;
