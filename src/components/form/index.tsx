"use client";

import React, { useState } from "react";
import styles from "./styles.module.scss";

const Form = () => {
  const [email, setEmail] = useState<string>("");
  const [nome, setNome] = useState<string>("");
  const [mensagem, setMensagem] = useState<string>("");
  const [empresa, setEmpresa] = useState<string>("");
  const [produto, setProduto] = useState<string>("");

  return (
    <form className={styles.formContainer}>
      <h2>Formulário para contato</h2>
      <label className={`${styles.inputContainer} ${styles.inputNome}`}>
        <span>Nome Completo</span>
        <input type="text" onChange={(e) => setNome(e.target.value)} />
      </label>
      <label className={`${styles.inputContainer} ${styles.inputEmail}`}>
        <span>Email</span>
        <input type="email" onChange={(e) => setEmail(e.target.value)} />
      </label>
      <label className={`${styles.inputContainer} ${styles.inputProduto}`}>
        <span>Produto</span>
        <input type="text" onChange={(e) => setProduto(e.target.value)} />
      </label>
      <label className={`${styles.inputContainer} ${styles.inputMensagem}`}>
        <span>Mensagem</span>
        <textarea
          className={styles.textarea}
          onChange={(e) => setMensagem(e.target.value)}
        />
      </label>
      <label className={`${styles.inputContainer} ${styles.inputEmpresa}`}>
        <span>Empresa</span>
        <input type="text" onChange={(e) => setEmpresa(e.target.value)} />
      </label>
    </form>
  );
};

export default Form;
