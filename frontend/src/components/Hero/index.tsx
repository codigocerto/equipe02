import Image from "next/image";
import yodaImage from "../../../public/images/yoda.png";

import styles from "./styles.module.css";

const HeroSection = () => {
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
            src={yodaImage}
            alt="Imagem do Yoda"
            className={styles.yodaImage}
            width={380}
            height={500}
            quality={100}
            priority
          />
          <div className={styles.elipse}></div>
        </section>
      </div>
    </div>
  );
};

export default HeroSection;
