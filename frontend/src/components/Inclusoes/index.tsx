import React from 'react';
import styles from './styles.module.css';

const Inclusoes = () => {
  return (
    <section className={styles.section}>
      <div className={styles.imageWrapper}>
        <img src="/images/diversidade1.png" alt="Diversidade 1" className={styles.image1} />
        <img src="/images/diversidade2.png" alt="Diversidade 2" className={styles.image2} />
        <img src="/images/diversidade3.png" alt="Diversidade 3" className={styles.image3} />
        <img src="/images/diversidade4.png" alt="Diversidade 4" className={styles.image4} />
      </div>
      <div className={styles.textWrapper}>
        <div className={`${styles.textBlock} ${styles.leftAligned}`}>
          <h3 className={styles.title}>Tech4All</h3>
          <p className={styles.text}>
            Programa para capacitar pessoas LGBTQIA+ em tecnologia, com cursos de programação, design e software, em um ambiente inclusivo e acolhedor.
          </p>
        </div>
        <div className={`${styles.textBlock} ${styles.rightAligned}`}>
          <h3 className={styles.title}>InclusãoTech</h3>
          <p className={styles.text}>
            Programa para pessoas com deficiência, oferecendo cursos de desenvolvimento de software, design acessível e habilidades tecnológicas. A InclusãoTech assegura materiais e ambientes acessíveis, além de suporte personalizado para atender às necessidades individuais.
          </p>
        </div>
        <div className={`${styles.textBlock} ${styles.leftAligned}`}>
          <h3 className={styles.title}>TechAfro</h3>
          <p className={styles.text}>
            Iniciativa para incluir pessoas negras na tecnologia. O TechAfro oferece cursos de programação, ciência de dados e IA, além de mentorias, visando criar uma rede de apoio e oportunidades para avanço profissional.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Inclusoes;
