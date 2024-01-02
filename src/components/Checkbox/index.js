import React from "react";
import Image from "next/image";
import styles from "./styles.module.scss";

const Checkbox = ({ checked, onCheck, children }) => {
  return (
    <div onClick={() => onCheck(!checked)} className={styles.checkboxContainer}>
      <span className={`${styles.checkbox} ${checked ? styles.checked : ""} `}>
        {checked && (
          <Image src="/check.png" width={12} height={9} alt={"checked"} />
        )}
      </span>
      {children}
    </div>
  );
};

export default Checkbox;
