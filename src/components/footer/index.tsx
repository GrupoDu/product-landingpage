"use client";

import { LuInstagram, LuLinkedin } from "react-icons/lu";
import { FaWhatsapp } from "react-icons/fa";
import styles from "./styles.module.scss";
import React from "react";
import Link from "next/link";
import toast from "react-hot-toast";

const Footer = () => {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.upper}>
        <div className={styles.marcaGrupo}>
          <h3>Grupo Du Car</h3>
          <hr />
          <p>
            Eficiênca na sua obra, estilo no seu lar, e desempenho na sua
            evolução!
          </p>
          <div className={styles.socialsIcons}>
            <Link href={""} target="_blank">
              <LuInstagram color="white" className={styles.icons} />
            </Link>
            <Link href={""} target="_blank">
              <LuLinkedin color="white" className={styles.icons} />
            </Link>
            <Link href={"https://wa.me/5581999040919"} target="_blank">
              <FaWhatsapp color="white" className={styles.icons} />
            </Link>
          </div>
        </div>
        <div className={styles.termos}>
          <h3>Termos e políticas</h3>
          <hr />
          <ul>
            <li>
              <Link
                href={"https://www.grupodu.com.br"}
                className={styles.links}
              >
                Sobre nós
              </Link>
            </li>
            <li>
              <Link href={"#"} className={styles.links}>
                Produtos
              </Link>
            </li>
          </ul>
        </div>
        <div className={styles.emailNovidade}>
          <h3>Novidades</h3>
          <hr />
          <p>Receba atualizações sobre nossos projetos e novidades do grupo</p>
          <div className={styles.inputEmail}>
            <input type="email" name="email" placeholder="Seu e-mail" />
            <button
              onClick={() => toast.error("Funcionalidade em desenvolvimento!")}
            >
              Inscrever
            </button>
          </div>
        </div>
      </div>
      <div className={styles.down}>
        <span>&copy; 2025 Grupo Du Car. Todos os direitos reservados</span>
      </div>
    </div>
  );
};

export default Footer;
