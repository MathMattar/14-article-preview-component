import React from "react";
import styles from "./Banner.module.css";

export default function Banner() {
  return (
    <div
      className={styles.banner}
      style={{ backgroundImage: `url('/images/drawers.jpg')` }}
    ></div>
  );
}
