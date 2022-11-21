import React from "react";
import styles from "./ContainerStyle.module.scss";
import {
  slideImg1,
  slideImg2,
  slideImg3,
  slideImg4,
  slideImg5,
} from "./Images";
import { Slider } from "./Slider";

const App = () => {
  const slides = [
    {
      url: slideImg1,
      title: "beach",
    },
    {
      url: slideImg2,
      title: "boat",
    },
    {
      url: slideImg3,
      title: "forest",
    },
    {
      url: slideImg4,
      title: "city",
    },
    {
      url: slideImg5,
      title: "italy",
    },
  ];

  return (
    <>
      <div className={styles.containerStyles}>
        <Slider slides={slides} />
      </div>
    </>
  );
};

export default App;
