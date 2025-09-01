"use client";

import React, { useState } from "react";
import styles from "./styles.module.scss";
import Button from "../button";
import toast from "react-hot-toast";

const Form = () => {
  const [email, setEmail] = useState<string>("");
  const [telefone, setTelefone] = useState<string>("");
  const [nome, setNome] = useState<string>("");
  const [mensagem, setMensagem] = useState<string>("");
  const [empresa, setEmpresa] = useState<string>("");
  const [produto, setProduto] = useState<string>("");

  const handleEmail = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/email", {
        method: "POST",
        body: JSON.stringify({
          email,
          nome,
          mensagem,
          empresa,
          produto,
          telefone,
        }),
      });

      if (res.status === 400)
        return toast.error(
          "Algo deu errado, lembre-se de preencher todos os campos!"
        );

      toast.success("Recebemos seu pedido com sucesso!");
    } catch (error) {
      console.log(error);
      toast.error("Algo deu errado, tente novamente!");
    }
  };

  return (
    <div className={styles.formContainer}>
      <h2>Formulário para contato</h2>
      <form className={styles.formulario} onSubmit={handleEmail}>
        <label className={`${styles.inputContainer} ${styles.inputNome}`}>
          <span>Nome Completo</span>
          <input
            type="text"
            placeholder="Seu nome"
            onChange={(e) => setNome(e.target.value)}
          />
        </label>
        <label className={`${styles.inputContainer} ${styles.inputEmail}`}>
          <span>Email</span>
          <input
            type="email"
            placeholder="Seu email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label className={`${styles.inputContainer} ${styles.inputNumero}`}>
          <span>Número de celular</span>
          <input
            type="text"
            placeholder="Seu celular"
            onChange={(e) => setTelefone(e.target.value)}
          />
        </label>
        <label className={`${styles.inputContainer} ${styles.inputProduto}`}>
          <span>Produto</span>
          <input
            type="text"
            placeholder="Produto de interesse"
            onChange={(e) => setProduto(e.target.value)}
          />
        </label>
        <label className={`${styles.inputContainer} ${styles.inputEmpresa}`}>
          <span>Empresa</span>
          <input
            type="text"
            placeholder="Sua empresa"
            onChange={(e) => setEmpresa(e.target.value)}
          />
        </label>
        <label className={`${styles.inputContainer} ${styles.inputMensagem}`}>
          <span>Mensagem</span>
          <textarea
            className={styles.textarea}
            placeholder="Sua mensagem"
            onChange={(e) => setMensagem(e.target.value)}
          />
        </label>
        <Button type="submit" gradient={true}>
          Solicitar produto
        </Button>
      </form>
    </div>
  );
};

export default Form;
