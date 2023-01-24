import React from "react";
import styles from "../styles/Global";
const Button = ({ assetUrl, Link }) => {
  return (
    <div className={styles.btnBlack} onClick={() => window.open(Link)}>
      <img src={assetUrl} alt="expo_icon" className={styles.btnIcon} />
      <div className={styles.divBtn}>
        <p className={`${styles.btnText} font-normal text-xs`}>View it on</p>
        <p className={`${styles.btnText} font-bold text-sm`}>Expo Store</p>
      </div>
    </div>
  );
};

export default Button;
