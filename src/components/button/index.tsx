import React from "react";
import styles from "./styles.module.scss";

type Props = {
  children: React.ReactNode;
  gradient: boolean;
  onClick?: () => void;
};

const Button = ({ children, gradient, onClick }: Props) => {
  return (
    <button
      style={{ background: gradient ? "var(--gradient-blue)" : "white" }}
      className={styles.button}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
