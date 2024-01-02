import React from "react";
import styles from "./styles.module.scss";

const Button = ({ children }) => {
  return (
    <div className={styles.button}>
      <h4>{children}</h4>
    </div>
  );
};

export default Button;
