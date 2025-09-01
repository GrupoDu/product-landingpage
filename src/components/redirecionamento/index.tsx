"use client";

import React from "react";
import styles from "./styles.module.scss";
import { LuArrowBigRight } from "react-icons/lu";

const Redirecionamento = () => {
  return (
    <div className={styles.redirecionamento}>
      <span>Conheça o Grupo Du</span>
      <div className={styles.iconContainer}>
        <LuArrowBigRight color="white" className={styles.icon} />
      </div>
    </div>
  );
};

export default Redirecionamento;
