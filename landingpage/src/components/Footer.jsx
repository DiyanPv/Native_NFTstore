import React from "react";
import styles from "../styles/Global";

const Footer = ({ banner, text, textFinal }) => {
  return (
    <div
      className={`w-full object-cover text-white font-normal flex-col text-center ${styles.bgslate}`}
    >
      <p className={styles.pText2}>{text}</p>

      <div>{textFinal}</div>
    </div>
  );
};

export default Footer;
