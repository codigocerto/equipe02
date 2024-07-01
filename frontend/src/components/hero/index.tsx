import Image from "next/image";
import yodaImage from "../../../public/images/yoda.png";

import styles from "./styles.module.css";

const HeroSection = () => {
  return (
    <div className={styles.backgroundColor}>
      <div className={styles.containerHero}>
        <section className={styles.frame}>
          <div className={styles.frameTitle}>
            <h1 className={styles.title}>Alavancar sua carreira, você irá!</h1>
          </div>
          <div className={styles.frameParagraph}>
            <p className={styles.paragraph}>
              A Código Certo possui um programa de mentoria flexível e
              profissionais qualificados prontos para te ajudar na sua jornada
              na Programação.
            </p>
          </div>
        </section>

        <Image
          src={yodaImage}
          alt="Imagem do Yoda"
          width={380}
          height={500}
          quality={100}
          priority
        />
      </div>
    </div>
  );
};

export default HeroSection;
