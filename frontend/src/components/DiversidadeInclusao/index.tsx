import Image from "next/image";
import imagemInclusao from "../../../public/images/imagem-inclusao.png";
import styles from "./styles.module.css";

const DiversidadeInclusao = () => {
  return (
    <section className={styles.section}>
      <div className={styles.imageContainer}>
        <Image
          src={imagemInclusao}
          alt="Diversidade e Inclusao"
          className={styles.image}
          width={1200}
          height={210}
          quality={100}
          priority
        />
        <h2 className={styles.title}>Diversidade e Inclusão</h2>
      </div>
      <div className={styles.textContainer}>
        <p className={styles.paragraph}>
          Em nossa comunidade, reconhecemos que a diversidade é uma força
          poderosa que impulsiona a inovação, a criatividade e o progresso.
        </p>
      </div>
    </section>
  );
};

export default DiversidadeInclusao;

