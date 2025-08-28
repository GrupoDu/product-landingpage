import Image from "next/image";
import styles from "./page.module.scss";

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
          <div className={styles.imagesHeader}></div>
        </div>
      </header>
    </div>
  );
}
