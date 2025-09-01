import React from "react";
import styles from "./styles.module.scss";
import Image, { StaticImageData } from "next/image";
import { FaWhatsapp } from "react-icons/fa";

type Props = {
  nomeProduto: string;
  imagemProduto: StaticImageData;
  descricaoProduto: string;
  altImagem: string;
};

const Produto = ({
  nomeProduto,
  imagemProduto,
  descricaoProduto,
  altImagem,
}: Props) => {
  return (
    <div className={styles.produtoContainer}>
      <div className={styles.imageContainer}>
        <Image
          src={imagemProduto}
          alt={altImagem}
          className={styles.imagemProduto}
        />
      </div>
      <h3>{nomeProduto}</h3>
      <span>Descrição</span>
      <p>{descricaoProduto}</p>
      <button className={styles.button}>
        Entrar em contato <FaWhatsapp color="white" />
      </button>
    </div>
  );
};

export default Produto;
