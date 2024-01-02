import React from "react";
import styles from "./styles.module.scss";

const Input = ({
  label,
  name,
  placeholder = "Type here....",
  onChange,
  value = "",
  ...props
}) => {
  return (
    <div className={styles.inputContainer}>
      <label className={styles.label} htmlFor={name}>
        {label}
      </label>
      <input
        className={styles.input}
        name={name}
        placeholder={placeholder}
        onChange={(e) => onChange(name, e)}
        value={value}
        {...props}
      />
    </div>
  );
};

export default Input;
