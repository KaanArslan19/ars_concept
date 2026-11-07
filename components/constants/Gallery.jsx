import { Tabs, TabList, Tab, TabPanel, TabPanels } from "@chakra-ui/react";
import classes from "./Gallery.module.scss";
import { useState } from "react";
import { useTranslation } from "next-i18next";
import PhotoGrid from "@/components/ui/PhotoGrid";

const Gallery = ({ generalView, rooms, events }) => {
  const { t: translate } = useTranslation(["gallery", "home"]);
  const [tabIndex, setTabIndex] = useState(0);

  const tabs = [
    { key: "general", images: (generalView || []).flat() },
    { key: "rooms", images: (rooms || []).flat() },
    { key: "events", images: (events || []).flat() },
  ];

  return (
    <section className="section">
      <div className="section-header">
        <h1 className={classes.title}>{translate("home:navbar.gallery")}</h1>
      </div>
      <Tabs
        isLazy
        variant="soft-rounded"
        colorScheme="orange"
        index={tabIndex}
        onChange={setTabIndex}
      >
        <TabList className={classes.tabList}>
          {tabs.map(({ key }) => (
            <Tab key={key} fontSize="var(--fs-sm)" fontWeight={500}>
              {translate(`gallery:${key}`)}
            </Tab>
          ))}
        </TabList>
        <TabPanels>
          {tabs.map(({ key, images }) => (
            <TabPanel key={key} px={0} pb="3rem">
              <PhotoGrid images={images} label={translate(`gallery:${key}`)} />
            </TabPanel>
          ))}
        </TabPanels>
      </Tabs>
    </section>
  );
};

export default Gallery;
