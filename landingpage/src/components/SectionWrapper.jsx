import React from "react";
import styles from "../styles/Global";
import assets from "../assets";
import Button from "./Button";
const SectionWrapper = ({
  title,
  description,
  showBtn,
  mockupImg,
  banner,
  reverse,
}) => {
  return (
    <div
      className={`min-h-screen ${styles.section} ${
        reverse
          ? `${styles.bgWhite} flex-col md:flex-row sm:flex-row`
          : `${styles.bgPrimary} flex-col`
      } ${banner}`}
    >
      <div className={`${reverse ? styles.boxReverseClass : styles.boxClass}`}>
        <div className={`${styles.descDiv} fadeLeftMini mt-10`}>
          <h1 className={`${styles.h1Text}`}>{title}</h1>
          <p
            className={
              reverse
                ? `${styles.descriptionText} text-white font-normal font-serif`
                : `${styles.descriptionText}`
            }
          >
            {description}
          </p>
          {showBtn && (
            <Button assetUrl={assets.expo} Link="https://expo.dev/@ethron/Native_NFTmarket?serviceType=classic&distribution=expo-go" />
          )}
        </div>
      </div>
      <div className={styles.height96}>
        <img src={mockupImg} alt="img" className={styles.sectionImg} />
      </div>
    </div>
  );
};

export default SectionWrapper;
