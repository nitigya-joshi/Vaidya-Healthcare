import React, { useState, useEffect } from "react";

import Slide from "../Banner/Slide";
import TypeOnLoad from "../../Reuseable/TypeOnLoad/TypeOnLoad";
import CarouselCont from "../../Reuseable/Carousel/CarouselCont";
import Banner from "../Banner/Banner";
import AboutSection from "../AboutSection/AboutSection";
import { profile } from "../../AppConstant";
import styles from "./Home.module.css";
import FeaturesSection from "../FeaturesSection/FeaturesSection";

function Home() {
  const [currentSlideShown, setCurrentSlideShown] = useState(0);
  const slidesrow = profile?.map((element, index) => {
    return (
      <Slide
        className={styles}
        slide={element}
        index={index}
        currentSlideShown={currentSlideShown}
      />
    );
  });

  useEffect(() => {
    setCurrentSlideShown(0);
  }, []);

  const bannercont = {
    html: (
      <>
        <div className={`${styles["title"]}`}>
          <h2>
            <TypeOnLoad text={"Aryan Verma"} />
            <small className={`${styles["graytext"]}`}>
              <TypeOnLoad text={"Web Developer"} />
            </small>
          </h2>
          <div className={`${styles["hr"]}`}></div>
        </div>
        <CarouselCont
          slides={slidesrow}
          setCurrentSlideShown={setCurrentSlideShown}
          currentSlideShown={currentSlideShown}
        />
      </>
    ),
  };

  return (
    <div className={`${styles["home"]}`}>
      <Banner
        name="Aryan Verma"
        hr={true}
        html={bannercont.html}
        height="100vh"
        style={{
          backgroundImage: "url(https://i.imgur.com/n743WDX.png)",
          backgroundAttachment: "fixed",
        }}
      />
      <AboutSection />
      <FeaturesSection />
    </div>
  );
}

export default Home;
