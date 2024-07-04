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
        <p className={styles.paragraph}>Em nossa comunidade, reconhecemos que a diversidade é uma força poderosa que impulsiona a inovação, a criatividade e o progresso.</p>
      </div>
    </section>
  );
};

export default DiversidadeInclusao;