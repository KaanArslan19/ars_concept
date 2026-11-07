import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
} from "@chakra-ui/react";
import { useTranslation } from "next-i18next";
import { BiPlus } from "react-icons/bi";
import classes from "./FAQ.module.scss";

const questions = ["q1", "q2", "q3"];

const FAQ = () => {
  const { t: translate } = useTranslation("home");

  return (
    <section className="section">
      <div className="section-header">
        <h2>{translate("home:faq.header")}</h2>
      </div>
      <Accordion defaultIndex={[0]} allowMultiple className={classes.list}>
        {questions.map((q) => (
          <AccordionItem key={q} className={classes.item}>
            {({ isExpanded }) => (
              <>
                <h3>
                  <AccordionButton className={classes.button}>
                    <span className={classes.question}>
                      {translate(`home:faq.${q}.header`)}
                    </span>
                    <span
                      className={`${classes.icon} ${
                        isExpanded ? classes.iconOpen : ""
                      }`}
                    >
                      <BiPlus />
                    </span>
                  </AccordionButton>
                </h3>
                <AccordionPanel className={classes.answer}>
                  {translate(`home:faq.${q}.answer`)}
                </AccordionPanel>
              </>
            )}
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};

export default FAQ;
