import React from "react";
import styles from "./Home.module.scss";
import HomeHeader from "./HomeHeader";
import HomeHeaderContent from "./HomeHeaderContent";
import HomeHeaderBackground from "./HomeBackground";
import Statistics from "./Statistics";
import SimpleSteps from "./SimpleSteps";
import HomeAboutUs from "./HomeAboutUs";
import WhoWeHelp from "./WhoWeHelp";
import Contact from "./Contact";



const Home = () => {
  return (
    <div id="Start">
      <div className={styles.header__container}>
        <HomeHeaderBackground />
        <div className={styles.header__nav}>
          <HomeHeader />
          <HomeHeaderContent />
        </div>
      </div>
      <Statistics />
      <SimpleSteps />
      <HomeAboutUs />
      <WhoWeHelp />
      <Contact />
    </div>
  );
};

export default Home;
