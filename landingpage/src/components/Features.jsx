import React from "react";
import styles from "../styles/Global";
import assets from "../assets";
const Features = () => {
  const FeatureCard = ({ iconText, icon }) => {
    return (
      <div className={styles.featureCard}>
        <img src={icon} alt="icon" className={styles.featureImg} />
        <p className="text-black font-semibold">{iconText}</p>
      </div>
    );
  };
  return (
    <div className={`${styles.section} ${styles.bgPrimary} banner02 h-1/3 `}>
      <div className={`${styles.subSection} flex-col`}>
        <div className={`text-center`}>
          <h1 className={`${styles.whiteText} ${styles.h1Text}`}>
            <strong>Technologies</strong>
          </h1>
          <p className={`${styles.whiteText} ${styles.pText}`}>
            Developed using React Native/React.
          </p>
          <p className={`${styles.whiteText} ${styles.pText}`}>
            Styles/UI : TailwindCSS.
          </p>
        </div>
        <div className="flex flex-row flex-1 flex-wrap items-center justify-center">
        <FeatureCard icon={assets.react} iconText="React Native" />
        <FeatureCard icon={assets.javascript} iconText="JavaScript"/>
        <FeatureCard icon={assets.tailwind} iconText="Tailwind"/>
        </div>
      </div>
    </div>
  );
};

export default Features;
