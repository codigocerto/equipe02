import React from 'react';
import styles from './styles.module.css';

const DiversidadeInclusao = () => {
  return (
    <section className={styles.section}>
      <div className={styles.imageContainer}>
        <img src="/images/imagem-inclusao.png" alt="Diversidade e Inclusao" className={styles.image} />
        <h2 className={styles.title}>Diversidade e Inclusão</h2>
      </div>
      <div className={styles.textContainer}>
        <p className={styles.paragraph}>
          Em nossa comunidade, reconhecemos que a diversidade é uma força poderosa que impulsiona a
          inovação, a criatividade e o progresso.
        </p>
        <p className={styles.paragraph}>
          Acreditamos que a diversidade vai além das diferenças óbvias, como raça, gênero ou orientação
          sexual. Ela engloba uma ampla gama de características, incluindo origem étnica, idade,
          habilidades físicas e mentais, experiências de vida e perspectivas culturais.
        </p>
      </div>
    </section>
  );
};

export default DiversidadeInclusao;
