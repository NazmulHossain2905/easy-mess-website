import React from "react";
import styles from "./Button.module.css";
import Space from "./Space";

type ButtonType = "button" | "submit" | "reset" | undefined;

type ButtonProps = {
  children?: React.ReactNode;
  type?: ButtonType;
  rightIcon?: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

const Button: React.FC<ButtonProps> = ({
  children,
  type,
  rightIcon,
  onClick,
}) => {
  return (
    <button className={styles.Btn} type={type} onClick={onClick}>
      {children}
      {rightIcon && <span className={styles.iconStyle}>{rightIcon}</span>}
    </button>
  );
};

export default Button;
