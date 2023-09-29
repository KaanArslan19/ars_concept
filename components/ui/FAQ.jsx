import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Heading,
} from "@chakra-ui/react";
import { useTranslation } from "next-i18next";

const FAQ = () => {
  const { t: translate } = useTranslation("home");

  return (
    <Box my="2rem">
      <Heading ml="1rem">{translate("home:faq.header")}</Heading>
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
                1. {translate("home:faq.q1.header")}
              </Box>
              <AccordionIcon
                fontSize={{ base: "1rem", md: "1.5rem", "2xl": "2rem" }}
                color="var(--color-secondary-logo)"
              />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            -{translate("home:faq.q1.answer")}
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
                2.{translate("home:faq.q2.header")}
              </Box>
              <AccordionIcon
                fontSize={{ base: "1rem", md: "1.5rem", "2xl": "2rem" }}
                color="var(--color-secondary-logo)"
              />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            -{translate("home:faq.q2.answer")}
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
                3.{translate("home:faq.q3.header")}
              </Box>
              <AccordionIcon
                fontSize={{ base: "1rem", md: "1.5rem", "2xl": "2rem" }}
                color="var(--color-secondary-logo)"
              />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            -{translate("home:faq.q3.answer")}
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Box>
  );
};

export default FAQ;
