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
          width={1120}
          height={191}
          quality={100}
          priority
        />
        <h2 className={styles.title}>Diversidade e Inclusão</h2>
      </div>
      <div className={styles.textContainer}>
        <p className={styles.paragraph}>
<<<<<<< HEAD:frontend/src/components/DiversidadeInclusao/index.tsx
          Em nossa comunidade, reconhecemos que a diversidade é uma força poderosa que impulsiona a
          inovação, a criatividade e o progresso.
=======
          Em nossa comunidade, reconhecemos que a diversidade é uma força
          poderosa que impulsiona a inovação, a criatividade e o progresso.
>>>>>>> 2fb9142e206c4618651064767c9aa02c54759e55:frontend/src/components/diversidadeInclusao/index.tsx
        </p>
      </div>
    </section>
  );
};

export default DiversidadeInclusao;
