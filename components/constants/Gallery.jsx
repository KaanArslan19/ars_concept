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
import { useEffect, useState } from "react";
import { useTranslation } from "next-i18next";
import { AiOutlineClose } from "react-icons/ai";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import useBetterMediaQuery from "@/hooks/useBetterMediaQuery";
import { urlFor } from "@/client";

const Gallery = ({ generalView, rooms, events }) => {
  const { t: translate } = useTranslation("gallery");
  const [openImage, setOpenImage] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedCollection, setSelectedCollection] = useState([]);
  const [tabIndex, setTabIndex] = useState(0);
  const isMobile = useBetterMediaQuery("(max-width: 768px)");
  const handleTabChange = (index) => {
    setTabIndex(index);
  };

  const goToPrevious = (collection) => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide
      ? collection.flat().length - 1
      : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const goToNext = (collection) => {
    const isLastSlide = currentIndex === collection.flat().length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  const imageClickHandler = (index, collection) => {
    setCurrentIndex(index);
    setOpenImage(true);
    setSelectedCollection(collection);
  };

  const tabItems = ["general", "rooms", "events"];
  return (
    <Container
      mt={"2rem"}
      maxW={{ base: "992px", xl: "1280px", "2xl": "1536px" }}
    >
      <Heading as="h1" textAlign="center" mb="2rem">
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
              {generalView &&
                generalView.flat().map((item, index) => (
                  <Box
                    h="200px"
                    key={item + index}
                    position="relative"
                    onClick={() => imageClickHandler(index, generalView)}
                    cursor="pointer"
                  >
                    <Image
                      src={urlFor(item).url()}
                      fill="true"
                      style={{ objectFit: "cover" }}
                      sizes="auto"
                      alt={item.alt}
                      className={classes.img}
                    />
                  </Box>
                ))}
            </SimpleGrid>
          </TabPanel>
          <TabPanel>
            <SimpleGrid spacing={10} minChildWidth="250px">
              {rooms &&
                rooms.flat().map((item, index) => (
                  <Box
                    h="200px"
                    key={item + index}
                    position="relative"
                    onClick={() => imageClickHandler(index, rooms)}
                    cursor="pointer"
                  >
                    <Image
                      src={urlFor(item).url()}
                      fill="true"
                      style={{ objectFit: "cover" }}
                      sizes="auto"
                      alt={item + index}
                      className={classes.img}
                    />
                  </Box>
                ))}
            </SimpleGrid>
          </TabPanel>
          <TabPanel>
            <SimpleGrid spacing={10} minChildWidth="250px">
              {events &&
                events.flat().map((item, index) => (
                  <Box
                    h="200px"
                    key={item + index}
                    position="relative"
                    onClick={() => imageClickHandler(index, events)}
                    cursor="pointer"
                  >
                    <Image
                      src={urlFor(item).url()}
                      fill="true"
                      style={{ objectFit: "cover" }}
                      sizes="auto"
                      alt={item + index}
                      className={classes.img}
                    />
                  </Box>
                ))}
            </SimpleGrid>
          </TabPanel>
        </TabPanels>
        <TabList>
          <Tab onClick={() => setTabIndex(0)}>1</Tab>
          <Tab onClick={() => setTabIndex(1)}>2</Tab>
          <Tab onClick={() => setTabIndex(2)}>3</Tab>
        </TabList>
      </Tabs>
      {!isMobile && openImage && (
        <div className={classes.overlay}>
          <div className={classes.overlayContent}>
            <div className={classes.sliderContainer}>
              <div
                onClick={() => goToPrevious(selectedCollection)}
                className={classes.arrow}
              >
                <BiChevronLeft />
              </div>
              <div className={classes.imageContainer}>
                <Image
                  src={urlFor(selectedCollection.flat()[currentIndex]).url()}
                  fill={true}
                  style={{ objectFit: "contain" }}
                  alt={selectedCollection.flat()[currentIndex].alt}
                />
                <div
                  onClick={() => setOpenImage(false)}
                  className={classes.closeBtn}
                >
                  <AiOutlineClose />
                </div>
              </div>

              <div
                onClick={() => goToNext(selectedCollection)}
                className={classes.arrow}
              >
                <BiChevronRight />
              </div>
            </div>
          </div>
        </div>
      )}
    </Container>
  );
};

export default Gallery;
