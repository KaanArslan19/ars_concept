import {
  Container,
  Heading,
  SimpleGrid,
  Box,
  Tabs,
  TabList,
  Tab,
  TabPanel,
  TabPanels,
} from "@chakra-ui/react";
import classes from "./Gallery.module.scss";
import Image from "next/image";
import { useState } from "react";
import { useTranslation } from "next-i18next";

const Gallery = () => {
  const { t: translate } = useTranslation("gallery");

  const [tabIndex, setTabIndex] = useState(0);
  const handleTabChange = (index) => {
    setTabIndex(index);
  };
  const tabItems = ["general", "rooms", "events"];
  return (
    <Container
      mt={"2rem"}
      maxW={{ base: "992px", xl: "1280px", "2xl": "1536px" }}
    >
      <Heading textAlign="center" mb="2rem">
        {tabItems.map((item, index) => {
          if (index === tabIndex) {
            return translate(`gallery:${item}`);
          }
        })}
      </Heading>
      <Tabs align="center" index={tabIndex} onChange={handleTabChange}>
        <TabPanels>
          <TabPanel>
            <SimpleGrid spacing={10} minChildWidth="250px">
              <Box h="200px" border="1px solid">
                <Image
                  src="/images/ars_concept_logo.png"
                  fill="true"
                  style={{ objectFit: "contain" }}
                  alt="logo"
                  className={classes.img}
                />
              </Box>
              <Box h="200px" border="1px solid">
                <Image
                  src="/images/ars_concept_logo.png"
                  fill="true"
                  alt="logo"
                  className={classes.img}
                  style={{ objectFit: "contain" }}
                />
              </Box>
              <Box h="200px" border="1px solid">
                <Image
                  src="/images/ars_concept_logo.png"
                  fill="true"
                  alt="logo"
                  className={classes.img}
                  style={{ objectFit: "contain" }}
                />
              </Box>
              <Box h="200px" border="1px solid">
                <Image
                  src="/images/ars_concept_logo.png"
                  fill="true"
                  alt="logo"
                  className={classes.img}
                  style={{ objectFit: "contain" }}
                />
              </Box>
            </SimpleGrid>
          </TabPanel>
          <TabPanel>
            <SimpleGrid spacing={10} minChildWidth="250px">
              <Box h="200px" border="1px solid">
                <Image
                  src="/images/ars_concept_logo.png"
                  fill="true"
                  alt="logo"
                  className={classes.img}
                  style={{ objectFit: "contain" }}
                />
              </Box>
              <Box h="200px" border="1px solid">
                <Image
                  src="/images/ars_concept_logo.png"
                  fill="true"
                  alt="logo"
                  className={classes.img}
                  style={{ objectFit: "contain" }}
                />
              </Box>
              <Box h="200px" border="1px solid">
                <Image
                  src="/images/ars_concept_logo.png"
                  fill="true"
                  alt="logo"
                  className={classes.img}
                  style={{ objectFit: "contain" }}
                />
              </Box>
            </SimpleGrid>
          </TabPanel>
        </TabPanels>
        <TabList>
          <Tab onClick={() => setTabIndex(0)}>1</Tab>
          <Tab onClick={() => setTabIndex(1)}>2</Tab>
          <Tab onClick={() => setTabIndex(2)}>3</Tab>
        </TabList>
      </Tabs>
    </Container>
  );
};

export default Gallery;
