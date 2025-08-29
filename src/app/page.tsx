import Image from "next/image";
import styles from "./page.module.scss";
import { products } from "@/data/products";
import Form from "@/components/form";
import { FaWhatsapp } from "react-icons/fa";
import { LuMail, LuPhone } from "react-icons/lu";
import Button from "@/components/button";
import {
  MdFileDownload,
  MdKeyboardArrowRight,
} from "react-icons/md";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <h1>Grupo Du Car</h1>
        <div className={styles.textImages}>
          <div className={styles.textHeader}>
            <h3>Carro de mão</h3>
            <hr />
            <p>
              O carrinho de mão que une resistência e praticidade para o dia a
              dia da sua obra. Fabricado com materiais de alta qualidade, ele
              garante durabilidade mesmo nas tarefas mais pesadas, oferecendo
              conforto no manuseio e eficiência no transporte de cargas.
            </p>
          </div>
          <div className={styles.imagesHeader}>
            <Image
              src={products[0].images[0]}
              alt={products[0].title}
              className={styles.imageHeader}
            />
            <Image
              src={products[1].images[0]}
              alt={products[1].title}
              className={styles.imageHeader}
              id={styles.jerica}
            />
          </div>
        </div>
      </header>
      <div className={styles.formularioContato}>
        <div className={styles.contatos}>
          <h2>Solicite seu carrinho de mão</h2>
          <p>
            Preencha seus dados e nossa equipe entrará em contato para garantir
            que você receba exatamente o que procura.
          </p>
          <hr />
          <h3>Outras formas de contato</h3>
          <div className={styles.contatosIcons}>
            <FaWhatsapp color="white" className={styles.icon} />
            <span>(81) 99904-0919</span>
          </div>
          <div className={styles.contatosIcons}>
            <LuPhone color="white" className={styles.icon} />
            <span>(81) 99904-0919</span>
          </div>
          <div className={styles.contatosIcons}>
            <LuMail color="white" className={styles.icon} />
            <span>dommetalind@gmail.com</span>
          </div>
        </div>
        <Form />
      </div>
      <div className={styles.conhecerProdutos}>
        <h1>Ainda não conhece nossos produtos?</h1>
        <div className={styles.buttons}>
          <Button gradient={true}>
            <MdFileDownload color="white" className={styles.icon} />
            Baixe nosso catálogo completo
          </Button>
          <Link href={"https://grupodu.com.br"} className={styles.link}>
            <Button gradient={false}>
              Conheça o <span style={{ fontWeight: "bold" }}>GrupoDu</span>{" "}
              <MdKeyboardArrowRight color="black" className={styles.icon} />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
