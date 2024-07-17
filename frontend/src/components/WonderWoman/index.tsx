import Image from "next/image";
import WomanImage from "../../../public/images/wonder-woman.png";

import styles from "./styles.module.css";

const WonderWomanSection = () => {
  return (
    <div
      style={{
        background: "linear-gradient(164.48deg, #000000 10.65%, #141414 69.2%)",
      }}
    >
      <div className={styles.heroContent}>
        <section className={styles.frame}>
          <h1 className={styles.title}>Alavancar sua carreira, você irá!</h1>

          <p className={styles.paragraph}>
            A Código Certo possui um programa de mentoria flexível e
            profissionais qualificados prontos para te ajudar na sua jornada na
            Programação.
          </p>
        </section>

        <section className={styles.imageSection}>
          <Image
            src={WomanImage}
            alt="Imagem da Mulher Maravilha"
            className={styles.WomanImage}
            quality={100}
            priority
            placeholder="blur" // Adicionei esta linha
            blurDataURL="../../../public/images/wonder-woman.png" // Adicionei esta linha
          />
          <div className={styles.elipse}></div>
        </section>
      </div>
    </div>
  );
};

export default WonderWomanSection; 