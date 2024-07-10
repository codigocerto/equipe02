import styles from './styles.module.css';

const NossaMissao = () => {
  return (
    <section className={styles.section}>
      <div className={styles.textContainer}>
        <h2>Nossa Missão</h2>
        <p>
          Estamos comprometidos em criar um ambiente inclusivo, onde pessoas de todas as origens,
          identidades e experiências se sintam valorizadas, respeitadas e capacitadas a alcançar seu
          pleno potencial.
        </p>
        <p>
          Acreditamos que a diversidade vai além das diferenças óbvias, como raça, gênero ou orientação
          sexual. Ela engloba uma ampla gama de características, incluindo origem étnica, idade,
          habilidades físicas e mentais, experiências de vida e perspectivas culturais.
        </p>
      </div>
      <div className={styles.imageContainer}>
        <img src="/images/missao.png" alt="Nossa Missão" className={styles.image} />
      </div>
    </section>
  );
};

export default NossaMissao;
